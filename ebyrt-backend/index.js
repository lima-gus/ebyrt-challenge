const express = require('express');
const taskRouter = require('./routes/taskRouter');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use('/', taskRouter);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
