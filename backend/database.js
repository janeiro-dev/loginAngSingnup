const mongoose = require('mongoose');
const base = 'mongodb://localhost/loginsignup';

mongoose.connect(base)
        .then(db=>console.log('Database is working'))
        .catch(err=>console.err(error));


        module.exports = mongoose;