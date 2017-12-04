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
describe('first login', function () {
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield new login_page_1.Login().open();
        });
    });
    it('User is getting loged in', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield expect(protractor_1.browser.getTitle()).toEqual('Project', 'Here is no Sign In page');
            const emailField = protractor_1.element(protractor_1.by.css('input[type=\'email\']'));
            const passwordField = protractor_1.$('input[type=\'password\']');
            yield emailField.sendKeys('tylermac2030@gmail.com');
            yield passwordField.sendKeys('Alexander2030');
            yield protractor_1.browser.sleep(5000);
        });
    });
    it('User GETIING ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield expect(protractor_1.browser.getTitle()).toEqual('Project', 'Her2333In page');
            const emailField = protractor_1.element(protractor_1.by.css('input[type=\'email\']'));
            const passwordField = protractor_1.$('input[type=\'password\']');
            yield emailField.sendKeys('1111tylermac2030@gmail.com');
            yield passwordField.sendKeys('212Alexander2030');
            yield protractor_1.browser.sleep(5000);
        });
    });
});
//# sourceMappingURL=login.spec.js.map