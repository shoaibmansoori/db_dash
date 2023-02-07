const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    username: {
      type:String,
      require:[true,"please add the username"]
    },
    password: {
        type:String,
        require:[true,"please add the password"]
      },
    email: {
        type:String,
        require:[true,"please add the email"]
      }
});

module.exports = mongoose.model('User', userSchema);