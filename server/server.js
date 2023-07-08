const express = require('express')
const mongoose = require('./mongodbConfig')
const User = require('./models/User')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/users', (req, res) => {

    const {name, email} = req.body
    const user = new User({
        name,
        email
    })
    user.save().then(results => res.send(results)).catch(err => console.log("ErrorOcccurd"));

})

app.get('/scores', (req, res) => {
    User.find().then(users => res.send(users));
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
