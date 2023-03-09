
import loginPage from '../../support/pageObjects/loginPage'
import logoutSettings from '../../support/pageObjects/logoutSettings'
import homePage from '../../support/pageObjects/homePage'


const Form_URL = '/#sign-in'
const USERNAME = 'zujutest+automation@gmail.com'
const PASSWORD = 'TestAuto123'
const EXPECTED_LOGIN_PAGE_HEADER = 'Welcome to ZUJU KICKOFF'
const EXPECTED_HOME_PAGE_HEADER = 'Upcoming for you'
const EXPECTED_ERROR_MESSAGE = 'The email or password you entered is incorrect. Please try again.'
const INVALID_USERNAME = 'zujutestautomate@gmail.com'
const INVALID_PASSWORD = 'TestAuto'

describe('Verify Sign In page', () => {
  before(() => {
   
    loginPage.visit()
    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
     
  });

  it('should display the Autocomplete title', () => {
    loginPage.getTitle()
      .should('have.text', EXPECTED_LOGIN_PAGE_HEADER)
      
  })
  it('User should see an error message if they log in with incorrect username and password', () => {
    loginPage.login(INVALID_USERNAME, INVALID_PASSWORD)
    cy.wait(3000);
    loginPage.getErrorMessage().should('have.text',EXPECTED_ERROR_MESSAGE)
  })

  it('User should able to login with valid username and password',()=> {
    loginPage.login(USERNAME, PASSWORD);
    homePage.getHeader().should('have.text', EXPECTED_HOME_PAGE_HEADER)
    homePage.getSettingsbtn().click()
    logoutSettings.Clicklogoutbtn().click()
    logoutSettings.getlogoutBtn().click();
 
 
   })
  
  
  
})

