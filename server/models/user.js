var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email : {
        minlength : 1,
        require : true,
        type : String,
        trim : true
    }
});

module.exports = {User};