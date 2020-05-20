
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello WorldOk');

});

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
console.log ('express server started on :', 3001);

})