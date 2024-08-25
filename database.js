const mongo = require('mongoose');

mongo.connect('mongodb+srv://touatiamine972:mongo123@cluster0.5cdwxp3.mongodb.net/')
.then(()=> {console.log('connected to database')})
.catch((err)=> {console.log(`error ${err}`)})

module.exports = mongo;