exports.MusicsController = {
    index: function(req, res) {
        var view = this.view('/home/index');
        res.setHeader('Content-Type', 'text/html; charset=utf8');
        res.setHeader('Content-Length', view.content.length);
        res.end(view.content);
    },
    about: function(req, res) {
        var view = this.view('/home/about');
        res.setHeader('Content-Type', 'text/html; charset=utf8');
        res.setHeader('Content-Length', view.content.length);
        res.end(view.content);
    }
};
