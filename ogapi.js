var htmlparser = require("htmlparser2");
var request = require("request");

/* GET users listing. */
var ogapi = function(){
	return this;
};

/**
*	Test if a url is well formated
*/
ogapi.testUrl = function(url){
	return /^(http(s)?:\/\/[a-zA-Z0-9\-_]+\.[a-zA-Z]+(.)+)+/.test(url);
};

ogapi.openUrl = function(url, fn){
	if(!this.testUrl(url)){
		throw new Error('Url is not valid');
	}
	request({
		uri: url,
	}, function(error, response, body) {
		console.log(body);
		fn(body);
	});
};


exports = module.exports = ogapi;
