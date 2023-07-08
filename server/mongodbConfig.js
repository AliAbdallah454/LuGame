const mongoose = require('mongoose');
const PASSWORD = require('./secrets')

const uri = `mongodb+srv://alikhaledabdallah454:${PASSWORD}@cluster0.bitw1io.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB', error));

module.exports = mongoose;