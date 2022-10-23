const authModel = require("../model/users");
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.post = (name,password,role) => {
    const password = req.body.passsword;

    console.log('password', password);
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.

        console.log(hash);
        const data = authModel({
            name: req.body.name,
            password: hash,
            role: req.body.role
        })

        try {
            const dataToSave = data.save();
            res.status(200).json(dataToSave);
            
        } catch (error) {
            res.status(400).json(error.message);
        }
    });

}