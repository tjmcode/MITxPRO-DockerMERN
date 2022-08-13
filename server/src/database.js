const mongoose = require('mongoose');
const User = require('./models/user.model');

// for running native on local machine
// const connection = 'mongodb://localhost:27017/dockerize-me';

// for running in a Docker Container name "mongo"
const connection = 'mongodb://mongo:27017/dockerize-me';

const connectDb = () =>
{
    return mongoose.connect(connection);
};

module.exports = connectDb;