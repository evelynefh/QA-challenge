import todayPage from '../pages/todayPage'
import {VALID_USER} from '../roles/roles'


fixture ('Task feature: add tasks') 
 .beforeEach(async t=>{
    await t
    .useRole(VALID_USER)
})

test('Validate user is able to add a task', async t=>{
    await todayPage.addSimpleTask('test')
    await t.expect(todayPage.task.exists).ok()
    await t.click(todayPage.checkbox)
            .wait(5000)

})

test('Validate user is able to add 10 tasks', async t=>{
    await todayPage.add10Task()
    await t
    .expect(todayPage.contentTask.innerText).eql('10')


    //await t.maximizeWindow()
    await todayPage.deleteTask()
    await t.wait(9000)
})