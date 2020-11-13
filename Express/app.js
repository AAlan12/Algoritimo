var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
//app.use(bodyParser.json());
var calc = require('./calculadora');
app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/', function(req, res) {
  const parametro = {
    titulo: 'Soma'
  };
  res.rende('index', parametro);
});

app.post('/soma', function (req, res) {   
  var body = req.body;
  var a = parseFloat(body.a);
  var b = parseFloat(body.b);
  var resultado = calc.soma(a,b);
res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});

app.post('/subtracao', function (req, res) {   
  var body = req.body;
var resultado = calac.subtracao(body.a, body.b);
res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/multiplicacao', function (req, res) {   
  var body = req.body;
var resultado = calc.multiplicacao(body.a, body.b);
res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/divisao', function (req, res) {   
  var body = req.body;
var resultado = calc.divisao(body.a, body.b);
res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});
let port = 3001;
app.listen(3001, function() {
  console.log('App de Exemplo escutando na porta http://localhost:${3001}/');
});