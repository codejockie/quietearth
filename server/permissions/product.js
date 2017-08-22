Product.allow({
    'insert'(userId, doc) {
        return userId;
    }
});
