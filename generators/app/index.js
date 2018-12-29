const Generator = require("yeoman-generator");
const chalk = require("chalk");

const packageJSON = require("../../package.json");
const welcome = `    
╔╦╗┌─┐┌┬┐┌─┐┬─┐┌┐┌                 
║║║│ │ ││├┤ ├┬┘│││                 
╩ ╩└─┘─┴┘└─┘┴└─┘└┘                 
╔═╗┬─┐┌─┐┌┬┐┬─┐┌─┐┌─┐┌┬┐┌─┐┬─┐ ╦╔═╗
╠═╝├┬┘│ │ │ ├┬┘├─┤│   │ │ │├┬┘ ║╚═╗
╩  ┴└─└─┘ ┴ ┴└─┴ ┴└─┘ ┴ └─┘┴└─╚╝╚═╝
╔═╗┌─┐┌┐┌┌─┐┬─┐┌─┐┌┬┐┌─┐┬─┐        
║ ╦├┤ │││├┤ ├┬┘├─┤ │ │ │├┬┘        
╚═╝└─┘┘└┘└─┘┴└─┴ ┴ ┴ └─┘┴└─                  
v${packageJSON.version}
**************************************************
Github Repo (questions, suggestions, bugs):
https://github.com/Xotabu4/generator-modern-protractor
**************************************************

This ${chalk.bold(
  "generator-modern-protractor"
)} will create new and shiny protractorjs automation project in current folder!

You should have Chrome browser installed.
`;

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // Debug purposes. Disable after instalation verifications.
    this.option("noTestRun");
  }

  prompting() {
    this.log(welcome);
    const questions = [
      {
        type: "input",
        name: "testProjectName",
        message:
          "Whats the name of your project should be? Will be used in package.json",
        default: "ui-functional-tests"
      },
      {
        type: "input",
        name: "baseUrl",
        message:
          "Enter a URL for website that you want to test. This will be used as baseUrl property",
        default: "http://www.protractortest.org/testapp/ng1/"
      }
    ];

    return this.prompt(questions).then(props => {
      // To access props later use this.props.usedIde;
      this.props = props;
    });
  }

  writing() {
    this.log(this.props);
    // { globOptions: { dot: true } }
    this.fs.copyTpl(
      this.templatePath("**"),
      this.destinationRoot(),
      this.props
    );
    this.fs.copy(
      this.templatePath("gitignore"),
      this.destinationPath(`.gitignore`)
    );
    this.fs.copy(
      this.templatePath("vscode/"),
      this.destinationPath() + "/.vscode/",
      {
        dot: true
      }
    );
    // Killing extracopied folder. TODO: find way to ignore files. '!gitignore' does not work
    this.fs.delete(this.destinationPath("vscode"));
    this.fs.delete(this.destinationPath("gitignore"));
  }

  install() {
    this.installDependencies({
      bower: false,
      callback: () => {
        if (this.options.noTestRun) {
          return;
        }
        console.log(
          "Installing of dependencies finished, verifying browser and framework is setted up correctly..."
        );
        this.spawnCommand("npm", ["test"]);
      }
    });
  }

  end() {
    this.log(
      chalk.bold(
        `
**************************************************  
    Project generation is finished!

    Now generated project will be verified
**************************************************    
    `
      )
    );
  }
};
