const mongoose = require('mongoose');
const user = require('../models/user.models');

exports.test = function(req,res,next){
    res.json({msz: 'users found'});
}