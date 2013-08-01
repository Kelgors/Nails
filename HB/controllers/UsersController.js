exports.UsersController = {
    index: function(req, res, next) {
        this.respond(res, this.view('/users/list'));
    },
    show: function(req, res, next) {
        this.respond(res, this.view('/users/show'));
    },
    edit: function(req, res, next) {
        var v = this.view('/users/edit');
        //console.log(v);
        this.respond(res, v);
    },
    update: function(req, res, next) {
        console.log('do something');
        this.app.redirect('/users/');
    },
    respond: function(res, view) {
        res.setHeader('Content-Type', 'text/html; charset=utf8');
        res.setHeader('Content-Length', view.content.length);
        res.end(view.content);
    }
};
