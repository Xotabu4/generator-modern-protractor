[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

# This library is deprecated and won't be updated in future, since protractor support is ending as well: https://github.com/angular/protractor/issues/5502


# generator-modern-protractor [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Yeoman generator for ProtractorJS projects. Generates new project with ProtractorJS using most modern and shiny approaches.

## Whats inside?
- ProtractorJS 5.4.2
- TypeScript 3.5.3
- JasmineJS (as Protractor 5.4.2 dependency)
- Async/Await support, WebdriverJS ControlFlow is disabled
- PageObjects using [ES6 classes](http://es6-features.org/#ClassDefinition)
- PageFragments (Components) using [protractor-element-extend](https://github.com/Xotabu4/protractor-element-extend) library
- Additional [jasmine-protractor-matchers](https://github.com/Xotabu4/jasmine-protractor-matchers) to verify elements visibility easily
- Reporting made possible by nice [console reporter](https://github.com/razvanz/jasmine2-reporter) and [junit.xml reporter](https://github.com/larrymyers/jasmine-reporters) (to provide test results to your CI system)
- If you are using Visual Studio Code IDE - debug with TypeScript compilation is configured
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

Follow instructions that will appear in terminal, to provide project name and baseUrl properties.

After generation, dependencies should be installed automatically, chromedriver downloaded and super-simple test will be executed.
If everyting is passed correctly - you are good to go! Open README.MD in newly generated project and follow its instructions.

Feel free to [learn more about Yeoman](http://yeoman.io/).

[npm-image]: https://badge.fury.io/js/generator-modern-protractor.svg
[npm-url]: https://npmjs.org/package/generator-modern-protractor
[travis-image]: https://travis-ci.org/Xotabu4/generator-modern-protractor.svg?branch=master
[travis-url]: https://travis-ci.org/Xotabu4/generator-modern-protractor
[daviddm-image]: https://david-dm.org/Xotabu4/generator-modern-protractor.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Xotabu4/generator-modern-protractor
