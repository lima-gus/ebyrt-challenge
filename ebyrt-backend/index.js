const express = require('express');
const cors = require('cors');
const taskRouter = require('./routes/taskRouter');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', taskRouter);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
