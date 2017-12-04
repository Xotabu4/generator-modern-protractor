import { Config, browser } from 'protractor'

// Full protractor configuration file reference could be found here:
// https://github.com/angular/protractor/blob/master/lib/config.ts

let conf: Config = {
  // Connecting directly to ChromeDriverServer
  directConnect: true,
  specs: [
    '../specs/**/*.spec.js',
    '../specs/*.spec.js'
  ],

  baseUrl: 'http://website.com/',

  onPrepare: () => {
    // Adding nice console output.
    // Provided by: https://github.com/razvanz/jasmine2-reporter

    let ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter
    let console_reporter_options = {
      startingSpec: true
    }
    jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options))

    // Adding reporting that is applicable for Jenkins or other CI tool
    // Provided by: https://github.com/larrymyers/jasmine-reporters
    let JUnitXmlReporter = require('jasmine-reporters').JUnitXmlReporter
    let junit_reporter_options = {
      savePath: '../test_results/',
      consolidateAll: true
    }
    jasmine.getEnv().addReporter(new JUnitXmlReporter(junit_reporter_options))
      const protractorMatchers = require('jasmine-protractor-matchers');

    // Specifying global beforeEach and afterEach jasmine2 hooks.
    beforeEach(() => {
      // Adding .toAppear() and .toDisappear() into available matchers.
      // https://github.com/Xotabu4/jasmine-protractor-matchers
        jasmine.addMatchers(protractorMatchers);

    });

    afterEach(async () => {
      // Clearing browser data after each test
      await browser.manage().deleteAllCookies();
      await browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
    });
  },

  // Needed to make async/await work. Disables control flow.
  SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;
