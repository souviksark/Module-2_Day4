//why we are using nodejs we want to create APIs
// we should have our server ready
// http module which will help you to create server

/*
internal module => this modules you dont need to install it
npm install <<package name>>
fs => file system
os => operating system 
you want to perform one back up you need to create a zip file and store in one of the destination folder, scheduling task or a job
http module to create APIs

external module => this you need to install them using npm
-cors => to provide APIs to people whom you trust
-mongoose => if you want to connect with MongoDB database
-expressjs => framework we will use to build APIs
-sequalize => if you want to connect mySQL data base
*/

var http = require('http');
//common module
//import http from 'http'
//module JS

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response'
  console.log("server is running on 8000 check on localhost");
}).listen(8000);

//8080 port is not working => IIS server 