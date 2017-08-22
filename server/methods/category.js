Meteor.methods({
    addCategory(category) {
        const exists = Category.findOne({ name: category.name });
        if (!exists) {
            return Category.insert(category);
        }
    }
});
