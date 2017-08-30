Product = new Mongo.Collection('product');
Product.helpers({
   category() {
       return Category.findOne(this.categoryId);
   }
});

Product.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Product Name',
        max: 20
    },
    categoryId: {
        type: String,
        label: 'Category'
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    rating: {
        type: Number,
        defaultValue: 0
    }
}));
