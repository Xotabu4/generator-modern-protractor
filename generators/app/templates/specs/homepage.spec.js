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
const login_page_1 = require("../page_objects/login.page");
describe('Verifying project generation ', function () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield new login_page_1.Login().open();
    }));
    it('Checking that created project can start and communicate with browser', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield expect(protractor_1.$$('div').first()).toAppear('Atleast one div should appear on the page');
        });
    });
    afterAll(() => {
        console.warn(`
            If all test is passed, and no errors in console - this means you are good to go!
            Just remove this describe block from specs/homepage.spec.ts file. And start writing your tests!

            Please check README.md in generated project for future details
        `);
    });
});
//# sourceMappingURL=homepage.spec.js.map