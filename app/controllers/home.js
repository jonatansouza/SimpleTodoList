module.exports = function(app) {
  var fs = require('fs');
  var path = require('path');

  var controller = {};

  controller.index = function(req, res) {
    res.render('home/index', {
      user: req.user
    });
  };

  //read file
  controller.readFile = function(req, res){
      var fileName = req.params.id;
      fs.readFile(path.join(__dirname,'../db/lists/', fileName), 'utf8', function(err, data){
        if(err){
          return res.status(404).json(err);
        }
        res.status(200).json(data);
      });
  }

  controller.writeFile = function(req, res){
      var fileName = req.body.name;
      fs.writeFile(path.join(__dirname,'../db/lists/', fileName), JSON.stringify(req.body), function(err, data){
        if(err){
          console.log(err);
          return res.status(400).json(err);
        }
          res.status(201).send(data);
      });
  };

  controller.getAllListNames = function(req, res){
    fs.readdir(path.join(__dirname,'../db/lists/'), function(err, list){
        if (err) {return res.status(400).json(err)};
        return res.status(200).json(list);
    });
  }

  controller.deleteFile = function(req, res){
      console.log(JSON.stringify(req.params.name)+" &&params");
      console.log(JSON.stringify(req.body.name)+" &&body");

      var fileDel = req.body.name;
      fs.unlink(path.join(__dirname,'../db/lists/'+fileDel), function(err){
          if(err) throw err;
          res.status(204).send("list "+fileDel+" deleted!");
      })
  }

  return controller;
};
