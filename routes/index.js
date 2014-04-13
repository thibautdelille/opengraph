var ogapi = require('../ogapi');

/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'OpenGraph API', api: '' });
};
exports.sumbit = function(req, res){
	ogapi.graph(req.body.url, function(json){
	  res.render('index', { title: 'OpenGraph API', api: json.toString()});
	})
};
