Category = new Mongo.Collection('category');
Category.before.insert((userId, doc) => {
    doc.createdAt = Date.now();
    doc.rating = 0;
});
