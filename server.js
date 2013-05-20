var io = require('socket.io').listen(9000);
io.sockets.on("connection", function (socket) {
    socket.on("login", function (msg) {
        socket.broadcast.emit("login");
    });
    socket.on("ice", function (msg) {
        socket.broadcast.emit("ice", msg);
    });
    socket.on("sdp", function (msg) {
        socket.broadcast.emit("sdp", msg);
    });
});