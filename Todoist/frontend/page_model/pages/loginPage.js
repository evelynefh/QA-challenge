/* eslint-disable new-cap */
import { Selector, t } from 'testcafe'

class loginPage {
  constructor () {
    this.emailTextBox = Selector('#email')
    this.passwordTextBox = Selector('#password')
    this.loginButton = Selector('.submit_btn')
    this.errorMessage = Selector('.error_msg')
  }

  async login (Username, password) {
    await t
      .typeText(this.emailTextBox, Username)
      .typeText(this.passwordTextBox, password)
      .click(this.loginButton)
  }
}

export default new loginPage()
