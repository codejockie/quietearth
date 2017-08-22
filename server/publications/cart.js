Meteor.publish('cart', () => {
    return Cart.find({});
});
