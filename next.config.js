const config = {
  reactStrictMode: true,
  publicRuntimeConfig: process.env.MY_ENV ? {env: process.env.MY_ENV} : {env: 'myDefault'}
};

module.exports = config;
