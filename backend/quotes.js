const express = require('express');
const server = express();

server.get('/', (request, response) => {
  response.send('Hello World');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

server.use(express.json());

let quotes = [
    {id: 1, text : "where there is a will there is a way"},
    {id: 2, text : "try but dont cry"},
    
];

server.get('/quotes',(request,response)=> {
    response.json(quotes);
});