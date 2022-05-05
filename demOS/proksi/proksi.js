var proxy = require('express-http-proxy');
var app = require('express')();
const port = 443 

app.use('/proxy', proxy('localhost:9000'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
