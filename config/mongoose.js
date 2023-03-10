const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/employee_review_system');
mongoose.connect(`${process.env.DB_URL}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function() {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;