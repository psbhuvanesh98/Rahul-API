// @ts-check
const { devices } = require('@playwright/test');

const config = {
testDir: './tests',
/* maximum time one test can run for. */
timeout: 30 * 1000,
expect: {

  timeout: 5000
},

reporter: 'html',
/* Shared settings for all the projects below.*/
use: {

  browserName : 'chromium',
  headless :false,
  screenshot : 'on',
  trace: 'retain-on-failure'

},
};
module.exports = config;
