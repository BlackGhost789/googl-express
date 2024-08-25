const mongoose = require('./database.js');

const User = new mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    pwd: {
        type : String,
        required : true,
    },
    
})

module.exports = mongoose.model("userkk", User)
