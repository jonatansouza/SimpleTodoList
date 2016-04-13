/**
 * Created by victor on 08/09/15.
 */
var sassMiddleware = require('node-sass-middleware');

module.exports = function(){
    return sassMiddleware({
        root: './public',
        src:"/assets/scss",
        dest: "/css",
        debug: false,
        outputStyle: 'compressed',
        prefix:  'css'
    })

};