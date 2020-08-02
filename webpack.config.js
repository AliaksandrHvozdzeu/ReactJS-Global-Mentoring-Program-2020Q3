function getEnvironment() {
  const environment = process.env.NODE_ENV;
  return environment ? environment.toLowerCase() : 'dev';
}

module.exports = require(`./webpack/webpack.config.${getEnvironment()}`);
