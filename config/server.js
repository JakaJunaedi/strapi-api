module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9195329489393d755348f9341f389fd3'),
    },
  },
  url: 'localhost:1337',
});
