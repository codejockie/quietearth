Meteor.publish('product', () => {
    return Product.find({});
});
Meteor.publish('categoryProducts', (categoryName) => {
   const categoryId = Category.findOne({ name: categoryName })._id;
   return Product.find({ categoryId });
});
