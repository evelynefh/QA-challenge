import { Selector, t } from 'testcafe'

class todayPage {
  constructor () {
  // this.todayTittle=Selector('.simple_content')
    this.todayTittle = Selector('#agenda_view > header > div > h1 > span')
    this.addTaskButton = Selector('.plus_add_button')
    this.taskNamePanel = Selector('.public-DraftStyleDefault-ltr')
    this.addTaskAfterNamebutton = Selector('.ist_button_red')
    this.task = Selector('.task_list_item')
    this.timeZone = Selector('#GB_window > div > div.content > div > div > div > div > a:nth-child(4)')
    this.task2 = Selector('li:nth-child(1).task_list_item')
    this.contentTask = Selector('.item_counter')
    this.checkbox = Selector('.task_checkbox__circle')
    this.orderby = Selector('#agenda_view > header > div > div > button > span')
  }

  async addSimpleTask (taskName) {
    await t
      .click(this.timeZone) // when the test is executed uin browserstack timezone alert is displayed, if running in local this line can be deleted or you can change time zone in todoist config page.
      .click(this.addTaskButton)
      .typeText(this.taskNamePanel, taskName)
      .click(this.addTaskAfterNamebutton)
  }

  async add10Task () {
    await this.addSimpleTask('test 1')
    for (let step = 2; step < 11; step++) {
      await t
        .click(this.taskNamePanel)
        .typeText(this.taskNamePanel, 'test ' + step)
        .click(this.addTaskAfterNamebutton)
    }
  }

  async deleteTask () {
    await t
      .click(this.orderby)
      .click(this.orderby)
    for (let step = 0; step < 10; step++) {
      await t
        .wait(1000)
        .click(this.checkbox)
    }
  }
}

// eslint-disable-next-line new-cap
export default new todayPage()
