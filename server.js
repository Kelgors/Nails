var express = require('express'),
app = express(),
nails = require('nails')(app);

process.argv.forEach(function (val, index, array) {
  switch(val) {
    case 'dev':
    case 'prod':
        nails.settings.ENV = val; break;
    case 'verbose':
    case 'error':
    case 'warning':
        nails.settings.DEBUG = val; break;
  }
});

nails.load({
    controllersPath: __dirname + '/HB/controllers/',
    modelsPath: __dirname + '/HB/models/',
    viewsPath: __dirname + '/HB/views/',
    templateCompiler: null
}, function() {
  app.listen(8080);
  console.log('Server started in ' + (nails.settings.ENV.toUpperCase()) + " (localhost:" + 8080 + ')');
});



