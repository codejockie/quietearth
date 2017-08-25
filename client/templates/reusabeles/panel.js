Template.panel.events({
    'click .btn-default'(event, template) {
        Session.set('isCheckingOut', false);
    }
});
