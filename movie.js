'use strict'
//Require apiKey

//Require the request library
const request = require('./node_modules/request');
const keys = require('./env');

function getMovieTitle(title){
	request('https://www.googleapis.com/customsearch/v1?key='+keys.key+ '&cx='+keys.id+'&q='+ title + '', function (error, response, body) {
	  //Inside that callback
	  var stuff = JSON.parse(body);
	  console.log(stuff.items[0].title);
	  //Print out the weather result
	});
}


//The actual request sending


module.exports=getMovieTitle;