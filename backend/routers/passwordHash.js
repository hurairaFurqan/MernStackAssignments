const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.hashPassword = (password) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
    });
}