'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

let tractor = `    
          ▓▓▓▓▓▓▓▓▓▓
          ▓░░▓░░░░▓   ▒
          ▓░░▓░░░░▓   ▒
          ▓░░▓░░░░▓▓  ▒
          ▓░░▓░░░░░▓  ▒
          ▓░░▓░░░░░▓  ▒
         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
        ▓▓████▓▓▒▒▓████▓▓▓▓▓
        ▓██████▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓
        ███▒▒███▓▒▒▒▓▓▓▓▓▓▓▓▓▓
        ██▒▒▒▒██▓▓▓▓▓▓▓▓███▓▓▓
        ███▒▒███       █▒▒▒█
         ██████        █▒▒▒█
          ████          ███

PROTRACTORJS + TYPESCRIPT + ASYNC/AWAIT yeoman generator!           
**************************************************`;

module.exports = class extends Generator {
  prompting() {
    this.log(tractor);
    this.log(
      `             ${chalk.bold('HELLO!')}

This ${chalk.bold('generator-modern-protractor')} will create new and shiny protractorjs automation project in current folder!

`);
    var prompts = [
      {
        type: 'input',
        name: 'testProjectName',
        message: 'First, whats the name of your project should be? Will be used in package.json',
        default: 'ui-functional-tests'
      },
      {
        type: 'input',
        name: 'baseUrl',
        message: 'Then - enter a URL for website that you want to test? This will be used as baseUrl property',
        default: 'http://www.protractortest.org/testapp/ng1/'
      }
      // {
      //   type: 'list',
      //   name: 'browsers',
      //   message: 'Which browsers do you want to run?',
      //   default: 0,
      //   choices: ['Chrome', 'Firefox', 'Both, at the same time']
      // }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log('Props are:', this.props);
    // This.log('Copying project files');
    // this.fs.copyTpl(
    //   this.templatePath(`package.json`),
    //   this.destinationPath(`package.json`),
    //   this.props
    // );

    // this.fs.copyTpl(
    //   this.templatePath(`README.md`),
    //   this.destinationPath(`README.md`),
    //   this.props
    // );

    // this.fs.copy(
    //   this.templatePath(`tsconfig.json`),
    //   this.destinationPath(`tsconfig.json`)
    // );

    this.fs.copy(
      this.templatePath(`gitignore`),
      this.destinationPath(`.gitignore`)
    );

    this.fs.copy(
      this.templatePath(`vscode/`),
      this.destinationPath(`.vscode/`)
    );

    this.fs.copyTpl(
      this.templatePath(`**/*.*`),
      this.destinationRoot(),
      this.props
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      callback: () => {
        this.spawnCommand('npm', ['test']);
      }
    });
  }

  end() {
    this.log('Thats it! Finished!');
  }
};
