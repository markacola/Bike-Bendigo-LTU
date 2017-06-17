const authentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');

const oauth2 = require('feathers-authentication-oauth2');
const FacebookTokenStrategy = require('passport-facebook-token');

class FacebookVerifier extends oauth2.Verifier {
  async verify(req, accessToken, refreshToken, profile, done) {
    const {
      id: facebookId,
      name: { familyName, givenName } = {},
      gender,
      photos = [],
    } = profile;
    const [{ value: displayPicture = '' } = {}] = photos;
    try {
      let { data: [user] } = await this.app
        .service('users')
        .find({ facebookId });
      if (user == null) {
        user = await this.app.service('users').create({
          facebookId,
          familyName,
          givenName,
          gender,
          displayPicture,
        });
      }
      done(null, user, { facebookId, userId: user._id });
    } catch (err) {
      console.error('failed to authenticate user:', err);
      done(Error('Failed to authenticate.'));
    }
  }
}

module.exports = function() {
  const app = this;
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());

  app.configure(
    oauth2(
      Object.assign(
        {
          name: 'facebook',
          Strategy: FacebookTokenStrategy,
          Verifier: FacebookVerifier,
        },
        config.facebook,
      ),
    ),
  );

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [authentication.hooks.authenticate(config.strategies)],
      remove: [authentication.hooks.authenticate('jwt')],
    },
    after: { create: [console.log] },
  });
};
