"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
// Full protractor configuration file reference could be found here:
// https://github.com/angular/protractor/blob/master/lib/config.ts
let conf = {
    // Connecting directly to ChromeDriverServer
    directConnect: true,
    specs: [
        '../specs/**/*.spec.js',
        '../specs/*.spec.js'
    ],
    baseUrl: 'http://build-a-list-test.com/',
    onPrepare: () => {
        // Adding nice console output. 
        // Provided by: https://github.com/razvanz/jasmine2-reporter
        let ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter;
        let console_reporter_options = {
            startingSpec: true
        };
        jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options));
        // Adding reporting that is applicable for Jenkins or other CI tool
        // Provided by: https://github.com/larrymyers/jasmine-reporters
        let JUnitXmlReporter = require('jasmine-reporters').JUnitXmlReporter;
        let junit_reporter_options = {
            savePath: '../test_results/',
            consolidateAll: true
        };
        jasmine.getEnv().addReporter(new JUnitXmlReporter(junit_reporter_options));
        const protractorMatchers = require('jasmine-protractor-matchers');
        // Specifying global beforeEach and afterEach jasmine2 hooks.
        beforeEach(() => {
            // Adding .toAppear() and .toDisappear() into available matchers.
            // https://github.com/Xotabu4/jasmine-protractor-matchers
            jasmine.addMatchers(protractorMatchers);
        });
        afterEach(() => __awaiter(this, void 0, void 0, function* () {
            // Clearing browser data after each test
            yield protractor_1.browser.manage().deleteAllCookies();
            yield protractor_1.browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();');
        }));
    },
    // Needed to make async/await work. Disables control flow.
    SELENIUM_PROMISE_MANAGER: false
};
exports.config = conf;
//# sourceMappingURL=protractor.conf.js.map