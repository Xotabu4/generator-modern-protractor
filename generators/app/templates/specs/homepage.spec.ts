import { browser, ExpectedConditions as EC, $, $$ } from "protractor";
import { HomePage } from "../page_objects/home.page";

describe("Verifying project generation ", function() {
  beforeEach(async () => {
    await new HomePage().open();
  });

  it("Checking that created project can start and communicate with browser", async function() {
    await expect($$("div").first()).toAppear(
      "Atleast one div should appear on the page"
    );
  });

  afterAll(() => {
    console.warn(`
            If all test is passed, and no errors in console - this means you are good to go! 
            Just remove this describe block from specs/homepage.spec.ts file. And start writing your tests!

            Please check README.md in generated project for future details
        `);
  });
});
