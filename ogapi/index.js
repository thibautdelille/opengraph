var Controller = require('../controllers');

/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'OpenGraph API', api: '' });
};
exports.sumbit = function(req, res){
  res.render('index', { title: 'OpenGraph API', api: req.body.url });
};
