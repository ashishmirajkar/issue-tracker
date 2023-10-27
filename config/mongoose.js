const mongoose = require('mongoose');
const url = 'mongodb+srv://premyadav18520:premkumar412@cluster0.htzhdao.mongodb.net/';
// mongoose.connect('url') 
mongoose.connect(url);
const db = mongoose.connection;

//If any Error then Getting this Line
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', () => {
    console.log("Connected to Database :: MongoDB ")
});

module.exports = db; //Exports db