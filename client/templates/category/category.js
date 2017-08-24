Template.category.onCreated(function () {
    this.subscribe('product');
});

Template.category.helpers({
    categoryName() {
        return FlowRouter.getParam('categoryName');
    },
    products() {
        return Product.find();
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
