var ogapi = require('../ogapi');

/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'OpenGraph API', api: '' });
};
exports.sumbit = function(req, res){
  res.render('index', { title: 'OpenGraph API', api: ogapi.openUrl(req.body.url)});
};
