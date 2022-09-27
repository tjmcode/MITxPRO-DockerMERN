const mongoose = require('mongoose');
const User = require('./models/user.model');

// support .env file variables
require('dotenv').config();

// log in sorted order
console.log(`++`);
console.log(`******** process.env (sorted)`);
const envSorted = Object.keys(process.env)
    .sort()
    .reduce((accumulator, key) =>
    {
        accumulator[key] = process.env[key];
        return accumulator;
    }, {});
console.log(envSorted);
console.log(`--`);

// for running native on local machine
// const connection = 'mongodb://localhost:27017/appname';

// for running in a Docker Container that's running a HOST named "mongo"
// NOTE: This "mongo" is *not* the Docker Container Name!
//                  mondodb://host:port/appname
const connection = `mongodb://${process.env.APP_NAME}-database:${process.env.APP_DATABASE_PORT}/${process.env.APP_NAME}`;

console.log(`++`);
console.log(`******** database connection`);
console.log(connection);
console.log(`--`);

const connectDb = () =>
{
    return mongoose.connect(connection);
};

module.exports = connectDb;