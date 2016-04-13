//necessary login bellow previously removed from app.get
//var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function(app){

    var controller = app.controllers.home;

    app.get('/', controller.index);
    app.post('/lists', controller.writeFile);
    app.get('/lists', controller.getAllListNames);
  	app.get('/lists/:id', controller.readFile);
    app.post('/lists/delete', controller.deleteFile);
};
