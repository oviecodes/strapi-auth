module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a93f3f6557df0f55764f082afebf74b2'),
  },
});
