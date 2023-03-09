
import loginPage from '../../support/pageObjects/loginPage';
import homePage from '../../support/pageObjects/homePage';
import reputationPage from '../../support/pageObjects/reputationPage';

const USERNAME = 'zujutest+automation@gmail.com';
const PASSWORD = 'TestAuto123';
const EXPECTED_HOME_PAGE_HEADER = 'Upcoming for you';
const TEAM_NAME = "Manchester City";

describe('Verify reputation page', () => {
  beforeEach(()=> {
    loginPage.visit()
    loginPage.login(USERNAME, PASSWORD);
    cy.wait(5000)
    //reputationPage.Popup().click()
    homePage.getHeader().should('have.text', EXPECTED_HOME_PAGE_HEADER)
    reputationPage.openRep_page()
    cy.wait(3000)
  })
 
  it('Search for a team and mark it favourite and then unfavourite',()=> {
  reputationPage.getSearchInput().type('Manchester City')
  reputationPage.getteamCard(TEAM_NAME).click()
  reputationPage.getfavouriteButtonPopUp().click()
  reputationPage.getloyaltyPointsValue().should('have.text', '0')
  reputationPage.getparticipatedMatchesValue().should('have.text', '0')
  reputationPage.getteamLevel().should('have.text', '1')
  reputationPage.getUnfavourite().click()
  reputationPage.getPopup().click()
  reputationPage.getSearchInput().clear()

})
})


  


