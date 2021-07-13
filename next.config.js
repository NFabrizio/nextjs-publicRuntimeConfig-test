const config = {
  reactStrictMode: true,
  publicRuntimeConfig: process.env.myEnvVar ? {env: process.env.myEnvVar} : {env: 'myDefault'}
};

module.exports = config;
