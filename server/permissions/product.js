Product.allow({
    'insert'(userId, doc) {
        return userId;
    },
    'update'(userId, doc) {
        return Roles.userIsInRole(userId, ['admin']);
    }
});
