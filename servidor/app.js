// 
// Nosso esqueleto do sistema servidor. Já vimos isso várias vezes, né?!
// Aqui tem o código do Hello World do Express (http://expressjs.com/pt-br/starter/hello-world.html)
//  mais o BodyParser para gente receber JSON do cliente
//  mais o driver do MongoDB para conectar com o Servidor De Banco de Dados
// 
// Vejam que o sistema ainda não faz  "nada" de útil, apenas inicializa o framework e declara
//  algumas coisas que vamos usar já já. Notem, tbm, que só temos um única rota: /, que retorna a string "Olá mundo!"
// 
// Links:
//  http://expressjs.com/pt-br/starter/hello-world.html
//  https://docs.mongodb.com/ecosystem/drivers/node-js/
//  https://github.com/expressjs/body-parser
// 
// Para executar:
//  cd masterDo/servidor
//  node app.js
// 

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var MongoClient = require('mongodb').MongoClient;
var ObjectId    = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/masterDo-db';

// Depois de "subir" o servidor (node app.js), acesse http://localhost:3000/ no navegador
//  e vc vai ver a string "Olá mundo!"
// 
// Ou seja, tudo certo! Ambiente preparado corretamente. :D
// 
app.get('/', function(req, res) {
  res.send('Olá mundo!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
