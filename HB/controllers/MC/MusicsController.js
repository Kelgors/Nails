var controller = require('../index.js')().controller;
exports.MusicsController = {
    root: controller('get', function(req, res) {
        var view = this.view('/home/index');
        var body = view.content;
        res.setHeader('Content-Type', 'text/plain; charset=' + view.file.encoding);
        res.setHeader('Content-Length', body.length);
        res.end(body);
    }),
    about: controller('get', function(req, res) {
        var view = this.view('/home/about');
        var body = view.content;
        res.setHeader('Content-Type', 'text/plain; charset=' + view.file.encoding);
        res.setHeader('Content-Length', body.length);
        res.end(body);
    }),
    'new': controller('get', function(req, res) {
        var body = '/new';
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Content-Length', body.length);
        res.end(body);
    }),
    create: controller('post', function(req, res) {
        var body = '/create';
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Content-Length', body.length);
        res.end(body);
    }),
    _id: {
        root: controller('get', function(req, res) {
            var body = ':id/';
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('Content-Length', body.length);
            res.end(body);
        }),
        edit: controller('get', function(req, res) {
            var body = ':id/edit';
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('Content-Length', body.length);
            res.end(body);
        }),
        update: controller('put', function(req, res) {
            var body = ':id/update';
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('Content-Length', body.length);
            res.end(body);
        })
    }
};
