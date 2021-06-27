const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  'chromeOptions': {
    args: ["--start-maximized", "--window-size=1630,963"]
    // binary: require('puppeteer').executablePath(),
  },
};

exports.config = config;
