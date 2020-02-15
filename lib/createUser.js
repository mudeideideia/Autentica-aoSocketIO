const md5 =  require('MD5')
const User = require('./userModel')
const loginUser = require('./loginUser')

//Create a new user
module.exports = function creatUser (socket, data) {
    
    // Hash the password
    data.password = md5(data.password)

    // Create a new user in MongDB
    const user = new User(data)

    //Save the MongDB Model
    user.save().then(function (data) {
        return loginUser(socket, data)
    })
}