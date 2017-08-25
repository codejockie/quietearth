Template.product.events({
    'click .btn-product'(event, template) {
        Meteor.call('Product.AddtoCart', this._id, 1);
    }
});
