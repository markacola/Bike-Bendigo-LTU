import { AsyncStorage } from 'react-native';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';

// Need to require instead of import so we can set the user agent first
const io = require('socket.io-client/dist/socket.io');

const host = 'http://bike-bendigo-ltu-api.doomsdaytuna.io';
const socket = io(host, { transports: ['websocket'] });

// Set up Feathers client side
const app = feathers();
// Register hooks module
app.configure(hooks());
// Register socket.io
app.configure(socketio(socket));
// Set up authentication with a store to cache your access token
app.configure(authentication({ storage: AsyncStorage }));

export default app;

if (process.env.NODE_ENV !== 'production') {
  global.app = app;
}
