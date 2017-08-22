Category.allow({
    'insert'(userId, doc) {
        return userId;
    }
});
