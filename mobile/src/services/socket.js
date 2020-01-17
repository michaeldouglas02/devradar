import socketio from "socket.io-client";

const socket = socketio(
  "https://3333-b4a748c1-ba30-4773-b70b-bd8afc7ec1f3.ws-us02.gitpod.io/",
  {
    autoConnect: false
  }
);

function subscribeToNewDevs(subscribeFunction) {
  socket.on("new-dev", subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
