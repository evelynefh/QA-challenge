import { Selector, t}  from 'testcafe'

class homePage{
    constructor(){
        //div._2C627 main._12BUU div.fGEm3:nth-child(1) ._3wncA.header_2xRdK nav._2sK9Q div.MTF3N._1lTj0 ul._3XsmI li:nth-child(1) > a._2q_cf
        this.logInButton= Selector('#__next > div > main > div.fGEm3 > header > nav > div > ul._3XsmI > li:nth-child(1) > a')
    }

    async submitLoginPage(){
        await t
        .click(this.logInButton)
    }
}
export default new homePage()