
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html');
};

exports.lockboxInbound = function(req, res){
  res.render('lockbox-inbound.html');
};