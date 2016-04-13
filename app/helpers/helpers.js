module.exports = function(app){
    app.use(function(req, res, next){
        res.locals.req = req;
        res.locals.session = req.session;
        res.locals.res = res;
        res.locals.user = req.session.user;
        next();
    });
};