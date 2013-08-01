exports = function(x, y) {
    this.x = x;
    this.y = y;
    console.log('User created');
};

exports.prototype = {
    x: 0,
    y: 0
};
