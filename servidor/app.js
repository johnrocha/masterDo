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

// Isso aqui só copie e cola! Confia...
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// 
// Aqui estamos criando uma rota GET para "/lista-de-tarefas/carregar-todas"
// A ação esperada aqui fazer um conexão com o BD e carregar de lá todos os documentos de ListaDeTarefas
//  e mandar de volta pro cliente (nosso app!) como JSON
// 
// Lembra que, _na prática_, Objeto javascript, JSON e Documento no MongoDB é praticamente a mesma coisa.
// Todos são representações da minha Lista De Tarefas em cada ambiente. ;)
// 
app.get('/lista-de-tarefas/carregar-todas', function(req, res) {
  // Quando um request GET para /lista-de-tarefas/carregar-todas acontecer...

  // ... chamo a função para conectar ao Banco de Dados...
  MongoClient.connect(url, function(err, db) {
    // ... quando conectar ...

    // ... busco por todos os registros (ou seja, todo os Documentos!) na coleção "lista_de_tarefas"...
    var documentos = db.collection('listas_de_tarefas').find();

    // ... transformo os documentos em um array de Objetos Javascript ...
    documentos.toArray(function(err, results) {
      // ... e mando-os de volta como JSON!
      res.json(results);

      // (e fecho a conexão com o BD)
      db.close();
    })


  });
  // facinho, né não? :)
  
})

app.get('/lista-de-tarefas/buscar-por-id', function(req, res) {
  var id = req.query.id;


  MongoClient.connect(url, function(err, db) {

    var documentos = db.collection('listas_de_tarefas').find({ _id: ObjectId(id) });

    documentos.toArray(function(err, results) {
      res.json(results[0]);

      db.close();
    })


  });
  // facinho, né não? :)
  
})

app.post('/lista-de-tarefas/criar', function(req, res) {
  var listaDeTarefas = req.body;

  MongoClient.connect(url, function(err, db) { 

    db.collection('listas_de_tarefas').insert(listaDeTarefas, function(err, documentosInseridos) {
      // retorna como JSON o documento inserido. Ele vai ter o _id que vamos precisar lá no cliente
      res.json( documentosInseridos.ops[0] );
    });

  });

});


app.get('/', function(req, res) {
  res.send('Olá mundo!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
