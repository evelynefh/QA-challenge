import todayPage from '../pages/todayPage'
import { VALID_USER, INVALID_EMAIL, INVALID_PASSWORD } from '../roles/roles'

//    ./BrowserStackLocal --key xNGqT2XdsAeDSZHpZDN9 --local-identifier TestCafe --daemon start --parallel-runs 5

// eslint-disable-next-line no-undef
fixture('Login feature: test with Roles ')

test('Validate user can log into todoist page with valid user', async t => {
  await t
    .useRole(VALID_USER)
  await t.click(todayPage.timeZone)
  await t.expect(todayPage.todayTittle.exists).ok()
})

test('Validate error message is displayed with invalid email format', async t => {
  await t
    .useRole(INVALID_EMAIL)
})

test('Validate error message is displayed with invalid password', async t => {
  await t
    .useRole(INVALID_PASSWORD)
})
