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
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to database');
})


//route management
const AdminRoute = require('./routes/admin');
app.use('/admin', AdminRoute, (req, res) => {
    console.log('This is admin route. Beaware!!!')
    res.send("Hello!")
});


//listening
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})