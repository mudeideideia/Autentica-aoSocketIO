// const mongoose = require('mongoose')

// const db = mongoose.connect('mongodb://localhost/basicauthapp');


// console.log(db);

// const userSchema = db.Schema({
//     firstname: String,
//     lastname: String,
//     password: { type: String, select: false },
//     email: String
// })

// module.exports = db.model('User', userSchema)

const mongoose = require('mongoose')

const url = 'mongodb://localhost/basicauthapp'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.once('open', _ => {
    console.log('Database connected');
}).on('error', err => {
    console.log('connection error', err);
})

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    password: { type: String, select: false },
    email: String
})

module.exports = mongoose.model('User', userSchema)
