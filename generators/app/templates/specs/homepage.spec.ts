import { browser, ExpectedConditions as EC, $, $$ } from 'protractor'
import { HomePage } from '../page_objects/home.page'

// Unfortunatelly had to loose types here. 
// Extending jasmine matchers does not work well - 
// https://medium.com/@cwmrowe/making-jasmine-and-typescript-play-nicely-c2f4bef1830a
declare let expect:any

describe('Home page', function () {
    beforeEach(async () => {
        await new HomePage().open()
    })

    it('should be loaded', async function () {
        // Stub for your tests
        await expect($$('div').first()).toAppear('Atleast one div should appear on the page')
    })
})