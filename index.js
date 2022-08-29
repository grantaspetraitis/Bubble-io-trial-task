const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const user = require('./controllers/user');

const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', user.generateText);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));