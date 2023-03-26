require('dotenv').config();
const express = require('express');
const app = express();
console.log(process.env.PORT);
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`server is running on port ${port}`));

app.get('/hello', (req,res) => res.status(200).json(process.env.MESSAGE));