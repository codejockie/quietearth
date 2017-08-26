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
        Meteor.call('Product.insert', product, (error) => {
            if (error) {
                $('.message').html(error.message).addClass('alert-danger');
            }
            $('#productForm')[0].reset();
            $('#productname').focus();
        });
    },
    'click .updateProduct'(event, template) {
        event.preventDefault();
        const id = $('#productId').val();
        const price = $('#price').val();
        const name = $('#productname').val();
        Meteor.call('Product.update', id, price, name, (error) => {
            if (error) {
                $('.message').html(error.message).addClass('alert-danger');
            }
            $('#productForm')[0].reset();
        });
    },
    'click .removeProduct'(event, template) {
        Meteor.call('Product.remove', this._id);
    },
    'click .product-edit'(event, template) {
        $('#price').val(this.price);
        $('#productname').val(this.name);
        $('#productId').val(this._id);
        $('.addProduct').text('Update Product').removeClass('addProduct').addClass('updateProduct');
    }
});
