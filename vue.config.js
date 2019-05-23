const path = require('path');

module.exports = {
  lintOnSave: 'error',
  chainWebpack: (config) => {
    config.resolve.alias
      .delete('@')
      .set('@', path.resolve(__dirname, 'src'))
      .set('%', path.resolve(__dirname, 'src/scss/modules'));
  }
};
