export default () => ({
  API_PORT: process.env.API_PORT || 4444,
  API_URL: process.env.API_URL,
  FE_URL: process.env.FE_URL || 'http://localhost:4200',
  PRODUCTION: process.env.PRODUCTION ? true : false,
  ACCESS_TOKEN: {
    secret: process.env.ACCESS_SECRET || 'access_secret',
    signOptions: {
      expiresIn: '7d',
    },
  },
  REFRESH_TOKEN: {
    secret: process.env.REFRESH_SECET || 'refresh_secret',
    signOptions: {
      expiresIn: '1d',
    },
  },
});
