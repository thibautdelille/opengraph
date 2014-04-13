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

ogapi.graph = function(url){
	var self = this;
	return self.openUrl(url, function(dom){
		return self.parseDom(dom, function(content){
			return content;
		});
	})
};

ogapi.graphDom = function(dom){
	var self = this;
	self.parseDom(dom, this.ongraph);
};

ogapi.ongraph = function(json){
	console.log('ongraph', json);
};

ogapi.openUrl = function(url, fn){
	if(!this.testUrl(url)){
		throw new Error('Url is not valid');
	}
	request({
		uri: url,
	}, function(error, response, body) {
		fn(body);
	});
};

ogapi.parseDom = function(dom, fn){
	if(!dom||dom==''){
    fn(null);
    return;
	}

	var json = null,
		parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
      if(name === "meta"){
      	if(!json){
      		json = {};
      	}
      	json[attribs.property] = attribs.content;
      }
    },
    onend: function(){
     	fn(json);
    }
	});
	parser.write(dom);
	parser.end();
}


exports = module.exports = ogapi;
