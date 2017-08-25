Template.registerHelper('avatar', () => {
   if (Meteor.user() && Meteor.user().profile.avatar) {
       return Meteor.user().profile.avatar;
   }

   return '/images/avatar.png';
});

Template.registerHelper('ratings', (comparator, value) => {
   return value >= comparator ? 'price-text-color' : '';
});

Template.registerHelper('currency', (value) => {
    return `₦ ${Number(value).toFixed(2)}`;
});

Template.registerHelper('truncate', (inputText, stringLen) => {
    const shortened = `${inputText.substring(0, stringLen)}...`;
    return new Spacebars.SafeString(shortened);
});
