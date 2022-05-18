const express = require('express');

const { taskRouter } = require('./routes/taskRouter');

require('dotenv').config();

const PORT = process.env.PORT; 

const app = express();

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.use(express.json());

app.use('/', taskRouter);
