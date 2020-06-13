const express = require('express');
var app = express();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Listening on port ${port}..`));   
