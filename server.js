const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');
require('dotenv').config();
require('./jwt')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);
app.post("/signup",userRoutes);
app.get("/login",userRoutes);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
