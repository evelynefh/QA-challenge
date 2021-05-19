# QA-challenge
# Todoist Automation Framework
 This repository contains the code changes for Todoist automation framework. for back and fron testing. This automation framework involves technologies as testcafe, newman, BrowserStack, Eslint, Github actins integration  and  Slack notifications. 

 
## Goals
* Create a framework test for Todois page
* Framework will include best practices (POM)
* Eslint cone analysis
* Implement BrowserStack
* Setup Slack Notifications 
* Create CI with Github actions 

## Instalation 
    Preconditiom: in order to be able to execute this code, you need to have installed in your computer Node.js and npm. 

    Clone the repo into your local machine: 
```
git clone https://github.com/evelynefh/QA-challenge.git
cd QA-challenge
```

Install the project 
```
npm install
```
## Running the tests
    ### Frontend test 
    Run test in local browser
```
npm run testFront
```
    BrowserStack 
    To be able to execute test in browser stak you will need to have uasr and token from browserstack.
     Set up BrowserStack 
```
npm i -g testcafe-browser-provider-browserstack
```
    Before using this plugin, set up the BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY environment variables. You can also set up these variables with the following commands:
```
export BROWSERSTACK_USERNAME="browserstack user"
```
```
export BROWSERSTACK_ACCESS_KEY="key value"
```
    Starting BrowserStack
```
  ./BrowserStackLocal --key <key value> --local-identifier TestCafe --daemon start --parallel-runs <number-of-parallels>
```
    Start the test
```
npm run browserstack
```

    ### Backend test 
    Execute the following command to be ale to run backend test
```
npm run testAPI
```
    A html report should be created in /Todoist/backend/reports/ path 

## Running the tests

For more information 
* [Testcafe](https://testcafe.io/)
* [BrowserStack](https://www.browserstack.com/)
* [ESLint](https://eslint.org/)