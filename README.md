# generator-modern-protractor [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Yeoman generator for ProtractorJS projects. Generates new project with ProtractorJS using most modern and shiny approaches.

## Whats inside?
- ProtractorJS 5.1.1
- TypeScript 2.2
- JasmineJS (as Protractor 5.1.1 dependency)
- Async/Await support, WebdriverJS ControlFlow is disabled
- PageObjects using [ES6 classes](http://es6-features.org/#ClassDefinition)
- PageFragments (Components) using [protractor-element-extend](https://github.com/Xotabu4/protractor-element-extend) library
- Additional [jasmine-protractor-matchers](https://github.com/Xotabu4/jasmine-protractor-matchers) to verify elements visibility easily
- Reporting made possible by nice [console reporter](https://github.com/razvanz/jasmine2-reporter) and [junit.xml reporter](https://github.com/larrymyers/jasmine-reporters) (to provide test results to your CI system)
- [TSLint](https://palantir.github.io/tslint/) is included and configured with `pre-test` npm task ready
- If you are using Visual Studio Code as IDE - debug with TypeScript compilation is configured, and hidding of compiled *.js and *.map.js files is supported
- Post conditions are added - wiping cookies, local and session storage after each test

## Installation and generation of project

First, install [Yeoman](http://yeoman.io) and generator-modern-protractor using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-modern-protractor
```
Make new folder for your project, and open it:
```bash
mkdir my-shiny-automation-project
cd my-shiny-automation-project
```

Then generate your new project (will be unpacked in current location, no subfolder):

```bash
yo modern-protractor
```

Feel free to [learn more about Yeoman](http://yeoman.io/).

### Made possible, and developed by Ciklum Testing Center of Excellence
We love Open Source!

![Ciklum][ciklum-image]

http://www.ciklum.com

[ciklum-image]: https://www.ciklum.com/ciklum-brand/ciklum-logo.png
[npm-image]: https://badge.fury.io/js/generator-modern-protractor.svg
[npm-url]: https://npmjs.org/package/generator-modern-protractor
[travis-image]: https://travis-ci.org/Xotabu4/generator-modern-protractor.svg?branch=master
[travis-url]: https://travis-ci.org/Xotabu4/generator-modern-protractor
[daviddm-image]: https://david-dm.org/Xotabu4/generator-modern-protractor.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Xotabu4/generator-modern-protractor
