Template.signin.events({
    'submit form'(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        Meteor.loginWithPassword(email, password);
        FlowRouter.go('/');
    }
})
