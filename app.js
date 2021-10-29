var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/abnt', function (req, res) {
  res.sendFile(__dirname + '/abnt.html')
})

app.get('/rota3', function (req, res) {
  res.send('<h1>ROTA 3</h1>')
})

app.listen(4000, function (erro) {
  if (erro) {
    console.log('Erro ao Iniciar.')
  } else {
    console.log('Servidor Iniciado.')
  }
})
