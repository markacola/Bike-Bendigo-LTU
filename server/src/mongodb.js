const mongoose = require('mongoose');
require('mongoose-geojson-schema');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
