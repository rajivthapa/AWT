const express = require('express');
const server = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

server.use(express.json());

let quotes = [
    {id: 1, text : "where there is a will there is a way"},
    {id: 2, text : "try but dont cry"},
    
];

server.get('/quotes',(request,response)=> {
    response.json(quotes);
});