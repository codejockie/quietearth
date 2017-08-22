Template.admin.helpers({
   categories() {
       return Category.find();
   },
    products() {
       return Product.find();
    }
});

Template.admin.events({
    'click .addProduct'(event, template) {
        event.preventDefault();
        const product = {};
        product.name = template.find('#productname').value;
        product.categoryId = template.find('#category').value;
        product.description = template.find('#description').value;
        product.price = template.find('#price').value;
        product.rating = template.find('#rating').value;
        Meteor.call('Product.insert', product, () => {
            $('#productForm')[0].reset();
            $('#productname').focus();
        });
    },
    'click .removeProduct'(event, template) {
        Meteor.call('Product.remove', this._id);
    }
});
