Product = new Mongo.Collection('product');
Product.helpers({
   category() {
       return Category.findOne(this.categoryId);
   }
});
