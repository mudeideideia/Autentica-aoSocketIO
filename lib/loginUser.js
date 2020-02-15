const crypto = require('crypto')
const getUser = require('./getUser')

// Log in a user
module.exports =  function loginUser(socket, user) {

    // Create a token with crypto
    const token = crypto.randomBytes(64).toString('base64')

    // Save the user session
    userSessions[token] = user;

    // Get the user belonging to the token and emit it
    return getUser(socket, token)
}