Meteor.publish('category', () => {
    return Category.find({});
});
