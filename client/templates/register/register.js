Template.register.events({
    'submit form'(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        Accounts.createUser({
            email,
            password,
            firstname,
            lastname
        });

        FlowRouter.go('/');
    }
});
