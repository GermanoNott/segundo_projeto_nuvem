var express = require('express') //importa o módulo express neste arquivo
var app = express() //iniciando o express
var path = require('path')

//criando a rota inicial
app.get('/', function (req, res) {
  res.sendFile(path.join(''))
})

//rota do cadastro de produtos
app.get('/produtos', function (req, res) {
  res.send('<h1>Lista de Produtos!</h1>')
})
app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(4000, function (erro) {
  // cria a aplicação na porta 4000
  if (erro) {
    console.log('Erro ao Iniciar.')
  } else {
    console.log('Servidor Iniciado.')
  }
})
