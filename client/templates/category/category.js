Session.setDefault('isCheckingOut', false);
Template.category.onCreated(function () {
    this.subscribe('product');
});

Template.category.helpers({
    categoryName() {
        return FlowRouter.getParam('categoryName');
    },
    products() {
        const categoryId = Category.findOne({ name: FlowRouter.getParam('categoryName')})._id;
        return Product.find({ categoryId });
    },
    isCheckingOut() {
        return Session.equals('isCheckingOut', true);
    }
});

Template.categoryAdmin.events({
    'click .addCategory'(event, template) {
        event.preventDefault();
        const category = {};
        category.name = template.find('#categoryName').value;
        Meteor.call('addCategory', category, () => {
            // clear the input field after successful insert
            $('#categoryName').val('');
        });
    }
});
