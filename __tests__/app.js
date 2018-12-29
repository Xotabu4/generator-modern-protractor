const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-modern-protractor:app", () => {
  describe("with default params", () => {
    const promptsAnswers = {
      testProjectName: "ui-functional-tests",
      baseUrl: "http://www.protractortest.org/testapp/ng1/"
    };

    beforeAll(() => {
      return helpers
        .run(path.join(__dirname, "../generators/app"))
        .withPrompts(promptsAnswers)
        .withOptions({
          noTestRun: "noTestRun"
        })
        .on("error", function(error) {
          console.log("Oh No!", error);
        });
    });

    it("copies correct files", () => {
      assert.file("config/config.js");
      assert.file("config/default.conf.ts");
      assert.file("helpers/helper.ts");
      assert.file("page_objects/base.page.ts");
      assert.file("page_objects/home.page.ts");
      assert.file("page_objects/page_fragments/example.fragment.ts");
      assert.file("specs/homepage.spec.ts");
      assert.file(".vscode/launch.json");
      assert.file(".vscode/tasks.json");
      assert.file(".gitignore");
      assert.file("index.d.ts");
      assert.file("package.json");
      assert.file("README.md");
      assert.file("tsconfig.json");
    });

    it("sets package.json project name", () => {
      assert.jsonFileContent("package.json", {
        name: promptsAnswers.testProjectName
      });
    });
    it.skip("package.json should contain tslint and pre-test tasks", () => {
      const scriptsObj = require("package.json").scripts;

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
      assert.fileContent("config/default.conf.ts", promptsAnswers.baseUrl);
    });
  });

  describe.skip("no visual studio code", function() {
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

  describe.skip("no TSLinter", () => {
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
