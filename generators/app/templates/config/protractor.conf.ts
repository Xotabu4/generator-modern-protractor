<% if (useTSlint) { %>/* tslint:disable:object-literal-sort-keys */<% } %>

import { browser, Config } from 'protractor'

// Full protractor configuration file reference could be found here:
// https://github.com/angular/protractor/blob/master/lib/config.ts

const conf: Config = {
  // Connecting directly to ChromeDriverServer
  directConnect: true,
  specs: [
    '../specs/**/*.spec.js',
    '../specs/*.spec.js'
  ],
  baseUrl: '<%=baseUrl%>',

  onPrepare: () => {
    // Adding nice console output.
    // Provided by: https://github.com/razvanz/jasmine2-reporter
    const ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter
    const consoleReporterOptions = {
      startingSpec: true
    }
    jasmine.getEnv().addReporter(new ConsoleReporter(consoleReporterOptions))

    // Adding reporting that is applicable for Jenkins or other CI tool
    // Provided by: https://github.com/larrymyers/jasmine-reporters
    const JUnitXmlReporter = require('jasmine-reporters').JUnitXmlReporter
    const junitReporterOptions = {
      savePath: '../test_results/',
      consolidateAll: true
    }
    jasmine.getEnv().addReporter(new JUnitXmlReporter(junitReporterOptions))

    // Specifying global beforeEach and afterEach jasmine2 hooks.
    beforeEach(() => {
      // Adding .toAppear() and .toDisappear() into available matchers.
      // https://github.com/Xotabu4/jasmine-protractor-matchers
      const matchers = require('jasmine-protractor-matchers')
      jasmine.addMatchers(matchers)
    })

    afterEach(async () => {
      // Clearing browser data after each test
      await browser.manage().deleteAllCookies()
      await browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
    })
  },

  // Needed to make async/await work. Disables control flow.
  SELENIUM_PROMISE_MANAGER: false
}

exports.config = conf
