var express = require('express');
var path = require('path');
var MongoClient = require('mongodb').MongoClient

//Connection url
var url = 'mongodb://localhost:27017/Bankingdb';


var app = express();
console.log("path" ,__dirname);
app.use(express.static(path.resolve(__dirname + './../frontend/views')));

app.use(express.static(path.resolve(__dirname + './../frontend')));

console.log(path.resolve(__dirname +'./../frontend'),">>>>>")


app.get('/' , function(req,res){
res.render('index.html');
});


app.get('/SignIn' , function(req,res){

	console.log('>>> data received from front' , req.query);
	

MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('Students').findOne({mail:req.query.mail} , function(err,data){
if(err){
	return res.send('Error');
}



if(data.password==req.query.password){

	res.send(data);
}
else{
	res.send('passwor incorrect')

}
console.log(">>>>>> data" , data);




})

})

})
app.post('/signup' , function(req,res){

	console.log('>>> data received from front' , req.query);
	

MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('Users').insertOne(req.query , function(err,data){
if(err){
	return res.send('Error');
}
res.send('created');


})

})

})



app.listen(5000,function(){

	console.log(">>>>>server is running")

});


