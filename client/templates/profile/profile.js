Template.profile.events({
   'change .myFileInput'(event, tmpl) {
       FS.Utility.eachFile(event, (file) => {
          Images.insert(file, (error, fileObj) => {
             if (!error) {
                 const userId = Meteor.userId();
                 const imageUrl = {
                     'profile.avatar': '/cfs/files/images/' + fileObj._id
                 };
                 setTimeout(() => {
                     Meteor.users.update(userId, {$set: imageUrl});
                 }, 2000);
             }
          });
       });
   }
});
