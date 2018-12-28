const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-modern-protractor:app", () => {
  describe("with default params", () => {
    let promptsAnswers = {
      testProjectName: "ui-functional-tests",
      baseUrl: "http://www.protractortest.org/testapp/ng1/",
      usedIde: "Visual Studio Code",
      hideCompiledJs: true,
      useTSlint: true
    };

    beforeAll(() => {
      return helpers
        .run(path.join(__dirname, "../generators/app"))
        .withPrompts(promptsAnswers)
        .withOptions({
          noTestRun: "noTestRun"
        })
        .on("error", function(error) {
          console.log("Oh Noes!", error);
        });
    });

    it("copies correct files", () => {
      assert.file([
        "config/protractor.conf.ts",
        "helpers/helper.ts",
        "page_objects/base.page.ts",
        "page_objects/home.page.ts",
        "page_objects/page_fragments/example.fragment.ts",
        "specs/homepage.spec.ts",
        ".vscode/launch.json",
        ".vscode/tasks.json",
        ".vscode/settings.json",
        ".gitignore",
        "package.json",
        "README.md",
        "tsconfig.json",
        "tslint.json"
      ]);
    });

    it("sets package.json project name", () => {
      assert.jsonFileContent("package.json", {
        name: promptsAnswers.testProjectName
      });
    });
    it("package.json should not contain tslint and pre-test tasks", () => {
      const fs = require("fs");
      const scriptsObj = JSON.parse(fs.readFileSync("package.json", "utf8"))
        .scripts;

      assert.objectContent(scriptsObj, {
        pretest: "npm run tslint",
        tslint:
          "tslint **/*.ts --exclude=node_modules/ --out=test_results/tslint.log"
      });
    });

    it("sets readme.md project name", () => {
      assert.fileContent("README.md", promptsAnswers.testProjectName);
    });

    it("sets correct baseUrl", () => {
      assert.fileContent("config/protractor.conf.ts", promptsAnswers.baseUrl);
    });
  });

  describe("no visual studio code", function() {
    beforeAll(() => {
      let promptsAnswers = {
        usedIde: "WebStorm"
      };
      return helpers
        .run(path.join(__dirname, "../generators/app"))
        .withPrompts(promptsAnswers)
        .withOptions({
          noTestRun: "noTestRun"
        })
        .on("error", function(error) {
          console.log("Oh Noes!", error);
        });
    });

    it("should not copy vscode folder if IDE is not vscode", function() {
      assert.noFile([
        ".vscode/launch.json",
        ".vscode/tasks.json",
        ".vscode/settings.json"
      ]);
    });
  });

  describe("no TSLinter", () => {
    let promptsAnswers = {
      useTSlint: false
    };

    beforeAll(() => {
      return helpers
        .run(path.join(__dirname, "../generators/app"))
        .withPrompts(promptsAnswers)
        .withOptions({
          noTestRun: "noTestRun"
        });
    });

    it("tslint.json should not be copied", () => {
      assert.noFile(["tslint.json"]);
    });

    it("package.json should not contain tslint and pre-test tasks", () => {
      const fs = require("fs");
      const scriptsObj = JSON.parse(fs.readFileSync("package.json", "utf8"))
        .scripts;

      assert.noObjectContent(scriptsObj, {
        pretest: "npm run tslint",
        tslint:
          "tslint **/*.ts --exclude=node_modules/ --out=test_results/tslint.log"
      });
    });
  });
});
