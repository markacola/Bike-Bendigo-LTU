// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Point } = mongooseClient.Schema.Types;
  const ride = new mongooseClient.Schema(
    {
      date: Date,
      from: Point,
      to: Point,
    },
    { timestamps: true },
  );
  const users = new mongooseClient.Schema(
    {
      facebookId: { type: String },
      familyName: String,
      givenName: String,
      displayPicture: String,
      gender: { type: String, enum: ['male', 'female', 'other'] },
      rideLevel: Number,
      rides: [ride],
      studentDetails: {
        course: String,
        yearStarted: Number,
      },
    },
    { timestamps: true },
  );

  return mongooseClient.model('users', users);
};
