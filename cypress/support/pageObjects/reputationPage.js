class reputationPage{

getSearchInput(){
  return cy.get('.MuiInputBase-input').should('have.attr', 'placeholder', 'Search for a team')

}
getteamCard(teamName){
    return cy.get(`div[data-cy="team-list"] > div > div > div > div:contains(${teamName})`)

}

getloyaltyPointsValue(){
    return cy.get('#redeem-modal-content').contains('Loyalty Points').parent().next()
}
getparticipatedMatchesValue(){
    return cy.get('#redeem-modal-content').contains('Participated Matches').next()
}

getteamLevel(){
    return  cy.get('#redeem-modal-content').contains('Level').next()
}

getfavouriteButtonPopUp(){
    return  cy.get('.MuiButtonBase-root.MuiButton-root').contains('Favourite')
}
getUnfavourite(){

    return  cy.get('.MuiButtonBase-root.MuiButton-root').contains('Unfavourite') 
}
getPopup()
{
    return cy.get('.css-4ma54i > .MuiIconButton-root')
}

openRep_page() {
    cy.visit('/reputation');
}
}

export default new reputationPage()


