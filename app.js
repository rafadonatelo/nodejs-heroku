/**

@author Rafael Gouveia da Silva
@version 1.0
**/
var app = require('./config/server.js');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/sistemas', function(req, res){
    res.sendFile(__dirname + '/app/views/sistemas.html');
});

app.listen(process.env.PORT,function(){
    console.log('Servidor ON')
});