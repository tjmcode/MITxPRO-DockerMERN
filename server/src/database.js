const mongoose = require('mongoose');
const User = require('./models/user.model');

// for running native on local machine
// const connection = 'mongodb://localhost:27017/appname';

// for running in a Docker Container that's running a HOST named "mongo"
// NOTE: This "mongo" is *not* the Docker Container Name!
//                  mondodb://host:port/appname
const connection = 'mongodb://appname-database:27017/appname';

const connectDb = () =>
{
    return mongoose.connect(connection);
};

module.exports = connectDb;