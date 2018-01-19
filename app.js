const models = require('./models');
const express = require('express-static');
const app = express();

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
// var env = nunjucks.configure('views', {noCache: true});
// // have res.render work with html files
// app.set('view engine', 'html');
// // when res.render works with html files, have it use nunjucks to do so
// app.engine('html', nunjucks.render);

models.User.sync({})
.then(function () {
    return models.Page.sync({});
})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(5432, function () {
        console.log('Server is listening on port 5432!');
    });
})
.catch(console.error);
