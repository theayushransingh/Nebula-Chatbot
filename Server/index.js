const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const { mongoose } = require('mongoose')
const app = express();
const cookieParser = require('cookie-parser')

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Datbase Connected"))
    .catch((err) => console.log("Database Not Connected ", err))

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use('/', require(`./Routes/authRoutes`));
const port = 8000;
app.listen(port, () => console.log(`Server is running on ${port}`));