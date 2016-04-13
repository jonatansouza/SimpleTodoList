var bodyParser = require('body-parser');
//variaveis para autenticacao e sessao
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var express = require('express');
var load = require('express-load');

module.exports = function(){
    var app = express();

    //variaveis de ambiente
    app.set('port', 3000);

    //middleware
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //midleware for PUT and DELETE verbs
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());

    //load controllers e routes
    //importante seguir a ordem models, controllers e routes
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};
