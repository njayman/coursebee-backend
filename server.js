const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors')

//parsers
app.use(bodyParser.json());
app.use(cors());


//mongodb connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connection.once('open', () => {
    console.log('Connected to database');
})


//route management
const InstructorRoute = require('./routes/Instructor');
const InstructorAuthRoute = require('./routes/auth');
const AdminRoute = require('./routes/admin');
const UserRoute = require('./routes/user');
app.use('/instructor', InstructorRoute, (req, res) => {
    console.log('This is Instructor route. Beaware!!!')
    res.send("Hello Instructor!")
});

app.use('/auth', InstructorAuthRoute, (req, res) => {
    console.log('!!!')
    res.send("...")
});

app.use('/admin', AdminRoute, (req, res) => {
    console.log('!!!')
    res.send("...")
});

app.use('/user', UserRoute, (req, res) => {
    console.log('!!!')
    res.send("...")
});

//listening
app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`);
})