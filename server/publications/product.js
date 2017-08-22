Meteor.publish('product', () => {
    return Product.find({});
});
