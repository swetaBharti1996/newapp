const mongoose = require('mongoose');
const user = require('../model/user.model');
var gravatar = require('gravatar');

exports.test = function(req,res,next){
    res.json({msz: 'users works'});
}


exports.register = function(req,res,next){
    user.findOne({email: req.body.email})
    .then(user => {
        if(user){
            return res.status(400).json({email: 'email allready exist'});
        }
        else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })

        }
    });

}