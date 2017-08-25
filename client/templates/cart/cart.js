Template.cart.helpers({
    cartitems() {
       return Cart.find();
    },
    itemsInCart() {
        return Cart.find().count() !== 0;
    }
});

Template.cart.events({
   'click .checkOutBtn'() {
       Session.set('isCheckingOut', true);
   },
    'click .delFromCart'(event, template) {
        Meteor.call('Cart.remove', this._id);
    }
});
