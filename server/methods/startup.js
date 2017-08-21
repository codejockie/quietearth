Meteor.startup(() => {
    Accounts.onCreateUser((options, user) => {
        if (!user.profile) {
            user.profile = {};
        }
        user.profile.firstname = options.firstname;
        user.profile.lastname = options.lastname;

        return user;
    });
    const users = Meteor.users.find().fetch();
    users.forEach((userData) => {
        if (userData.emails[0].address === 'admin@localhost.com') {
            Roles.addUsersToRoles(userData, ['admin']);
        }
    });
});
