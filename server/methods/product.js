Meteor.methods({
    'Product.insert'(product) {
        return Product.insert(product);
    },
    'Product.remove'(id) {
        return Product.remove({ _id: id });
    }
});
