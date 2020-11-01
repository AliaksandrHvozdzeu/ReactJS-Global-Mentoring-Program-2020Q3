function getEnvironment() {
  const env = process.env.NODE_ENV;
  return env ? env.toLowerCase() : 'dev';
}
const client = require(`./webpack/webpack.config.${getEnvironment()}`);
module.exports = [client];
