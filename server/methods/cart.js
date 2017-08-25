Meteor.methods({
   'Cart.remove'(id) {
       return Cart.remove({ _id: id});
   }
});
