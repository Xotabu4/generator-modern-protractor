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

To make this happen you should have Chrome browser installed.
`;

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // This method adds support for a `--coffee` flag
    this.option('noTestRun');
  }
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
      },
      {
        type: 'list',
        name: 'usedIde',
        message: 'What IDE do you use? This will be used to set up debug configuration',
        default: 'Visual Studio Code',
        // WebStorm support will be added in future versions. No available license.
        choices: ['Visual Studio Code', 'WebStorm', 'Other']
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.usedIde;
      this.props = props;
    });
  }

  writing() {
    this.log(this.props);
    // { globOptions: { dot: true } }
    this.fs.copyTpl(
      [this.templatePath('**'),
        '!vscode/'],
      this.destinationRoot(),
      this.props
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath(`.gitignore`)
    );
    if (this.props.usedIde === 'Visual Studio Code') {
      this.fs.copy(
        this.templatePath('vscode/'),
        this.destinationPath() + '/.vscode/',
        {dot: true}
      );
    }
    // Killing extracopied folder.
    this.fs.delete(this.destinationPath('vscode'));
  }

  install() {
    this.installDependencies({
      bower: false,
      callback: () => {
        if (!this.options.noTestRun) {
          console.log('Installing of dependencies finished, verifying browser and framework is setted up correctly...');
          this.spawnCommand('npm', ['test']);
        }
      }
    });
  }

  end() {
    this.log(chalk.bold(
      `
**************************************************  
    Project generation is finished!

    Now generated project will be verified
**************************************************    
    `));
  }
};
