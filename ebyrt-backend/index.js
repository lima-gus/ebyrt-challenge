require('dotenv').config();
const express = require('express');

PORT = process.env.PORT; 
// rotas
// const { } = require('./routes');

const app = express();

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.use(express.json());
