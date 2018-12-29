import { Config } from "protractor";
// Loosing types in this file since:
declare const browser: any;

// Full protractor configuration file reference could be found here:
// https://github.com/angular/protractor/blob/master/lib/config.ts
const protractorConfig: Config = {
  // Connecting directly to ChromeDriverServer
  directConnect: true,
  specs: ["../specs/**/*.spec.ts", "../specs/*.spec.ts"],
  baseUrl: "<%=baseUrl%>",

  onPrepare: () => {
    // Adding nice console output.
    // Provided by: https://github.com/razvanz/jasmine2-reporter
    const ConsoleReporter = require("jasmine2-reporter").Jasmine2Reporter;
    const console_reporter_options = {
      startingSpec: true
    };
    jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options));

    // Adding reporting that is applicable for Jenkins or other CI tool
    // Provided by: https://github.com/larrymyers/jasmine-reporters
    const JUnitXmlReporter = require("jasmine-reporters").JUnitXmlReporter;
    const junit_reporter_options = {
      savePath: "../test_results/",
      consolidateAll: true
    };
    jasmine.getEnv().addReporter(new JUnitXmlReporter(junit_reporter_options));

    // Specifying global beforeEach and afterEach jasmine2 hooks.
    beforeEach(() => {
      // Adding .toAppear() and .toDisappear() into available matchers.
      // https://github.com/Xotabu4/jasmine-protractor-matchers
      const matchers = require("jasmine-protractor-matchers");
      jasmine.addMatchers(matchers);
    });

    afterEach(async () => {
      // Clearing browser data after each test
      await browser.manage().deleteAllCookies();
      await browser.executeScript(
        "window.sessionStorage.clear(); window.localStorage.clear();"
      );
    });
  },
  // Needed to make async/await work. Disables control flow.
  SELENIUM_PROMISE_MANAGER: false
};

exports.config = protractorConfig;
