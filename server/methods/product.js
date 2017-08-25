Meteor.startup(() => {
    Product._ensureIndex({ "categoryId": 1});
});

Meteor.methods({
    'Product.insert'(product) {
        return Product.insert(product);
    },
    'Product.remove'(id) {
        return Product.remove({ _id: id });
    },
    'Product.AddtoCart'(product, quantity) {
        const item = Cart.findOne({ product });
        if (item) {
            return Cart.update({ product }, { $inc: { quantity: 1 }});
        }

        return Cart.insert({ userId: Meteor.userId(), product, quantity });
    }
});
