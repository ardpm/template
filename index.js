const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 2000; 
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // buat cors
app.use(express.json()); // body

app.get('/', (request, response) => {
    response.status(200).send('<h1>WELCOME TO API</h1>')
})


app.listen(PORT, () => console.log(`Running API ${PORT}`))