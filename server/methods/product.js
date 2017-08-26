Meteor.startup(() => {
    Product._ensureIndex({ "categoryId": 1});
});

Meteor.methods({
    // Create
    'Product.insert'(product) {
        return Product.insert(product);
    },
    // Delete
    'Product.remove'(id) {
        return Product.remove({ _id: id });
    },
    'Product.AddtoCart'(product, quantity) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not Authorised');
        }

        check(quantity, Number);
        check(product, String);
        const item = Cart.findOne({ product });

        if (item) {
            return Cart.update({ product }, { $inc: { quantity: 1 }});
        }

        return Cart.insert({ userId: Meteor.userId(), product, quantity });
    },
    // Update
    'Product.update'(id, price, name) {
        return Product.update(id, { $set: { price, name } });
    }
});
