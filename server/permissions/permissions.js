Meteor.users.allow({
    insert(userId, doc) {
        return userId;
    },
    update(userId, doc, fields, modifier) {
        return userId && doc._id === userId;
    },
    remove(userId) {
        return userId;
    }
});

Images.allow({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    },
    download() {
        return true;
    }
});
