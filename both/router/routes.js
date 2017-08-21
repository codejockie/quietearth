FlowRouter.route(['/', 'home'], {
    action() {
        console.log('Running Action to render templates into layouts.');
        FlowLayout.render('layout', { sidebar: 'sidebar', main: 'home', cart: 'cart' })
    }
});

FlowRouter.route('/admin', {
    action() {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            FlowLayout.render('layout', { sidebar: '', main: 'admin', cart: ''})
        } else {
            FlowLayout.render('layout', { sidebar: '', main: 'unauthorised', cart: ''})
        }
    }
});

FlowRouter.route('/register', {
    action() {
        FlowLayout.render('layout', { sidebar: '', main: 'register', cart: '' })
    }
});

FlowRouter.route('/signin', {
    action() {
        FlowLayout.render('layout', { sidebar: '', main: 'signin', cart: '' })
    }
});

FlowRouter.route('/profile', {
   action() {
       FlowLayout.render('layout', { sidebar: '', main: 'profile', cart: ''})
   }
});

FlowRouter.route('/signout', {
    action() {
        Meteor.logout((error) => {
           if (!error)  {
               FlowRouter.go('/signin');
           }
        });
    }
});

FlowRouter.route('/checkout', {
    action() {
        FlowLayout.render('layout', { sidebar: '', main: 'checkout', cart: '' })
    }
});

FlowRouter.route('/category/:categoryName', {
    subscriptions(params) {
        console.log('SUBSCRIBE', params);
        // make sure subscriptions exist
    },
    triggersEnter(params) {
        console.log('ENTER', params);
        // check that user is logged in
    },
    triggersExit(params) {
        console.log('EXIT', params);
        // check that there is no unsaved data
    },
    action() {
        FlowLayout.render('layout', { sidebar: 'sidebar', main: 'category', cart: 'cart' })
    }
});