import { Role} from 'testcafe'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import { CREDENTIALS } from '../data/Constants'

export const url = 'https://todoist.com/'

export const VALID_USER = Role(url, async t => {
  await homePage.submitLoginPage()
  await loginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
        .wait(1)
  // await t.click(this.timeZone) // when the test is executed uin browserstack timezone alert is displayed, if running in local this line can be deleted or you can change time zone in todoist config page.
}, {
  preserveUrl: true
})

export const INVALID_EMAIL = Role(url, async t => {
  await homePage.submitLoginPage()

  await loginPage.login(CREDENTIALS.INVALID_EMAIL.USERNAME, CREDENTIALS.INVALID_EMAIL.PASSWORD)
  await t.expect(loginPage.errorMessage.exists).ok()
}, {
  preserveUrl: true
})

export const INVALID_PASSWORD = Role(url, async t => {
  await homePage.submitLoginPage()
  await loginPage.login(CREDENTIALS.INVALID_PASSWORD.USERNAME, CREDENTIALS.INVALID_PASSWORD.PASSWORD)
  await t.expect(loginPage.errorMessage.exists).ok()
}, {
  preserveUrl: true
})
