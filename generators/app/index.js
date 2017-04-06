'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

let welcome = `    
╔╦╗┌─┐┌┬┐┌─┐┬─┐┌┐┌                 
║║║│ │ ││├┤ ├┬┘│││                 
╩ ╩└─┘─┴┘└─┘┴└─┘└┘                 
╔═╗┬─┐┌─┐┌┬┐┬─┐┌─┐┌─┐┌┬┐┌─┐┬─┐ ╦╔═╗
╠═╝├┬┘│ │ │ ├┬┘├─┤│   │ │ │├┬┘ ║╚═╗
╩  ┴└─└─┘ ┴ ┴└─┴ ┴└─┘ ┴ └─┘┴└─╚╝╚═╝
╔═╗┌─┐┌┐┌┌─┐┬─┐┌─┐┌┬┐┌─┐┬─┐        
║ ╦├┤ │││├┤ ├┬┘├─┤ │ │ │├┬┘        
╚═╝└─┘┘└┘└─┘┴└─┴ ┴ ┴ └─┘┴└─                  
**************************************************
Github Repo (questions, suggestions, bugs):
https://github.com/Xotabu4/generator-modern-protractor

Made possible thanks to 
https://www.ciklum.com/
Ciklum loves Open Source!
**************************************************

This ${chalk.bold('generator-modern-protractor')} will create new and shiny protractorjs automation project in current folder!




`;

module.exports = class extends Generator {
  prompting() {
    this.log(welcome);
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
    this.log(
      `Project generation is finished. 
    If you saw Chrome Browser was opened and closed, and no errors in console log - this means you are good to go!
    Please check README.md in generated project for details.
    `);
  }
};
