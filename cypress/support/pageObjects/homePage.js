class HomePage
{
getHeader(){

  return cy.get('h2[data-cy="page-heading"]')
}
getSettingsbtn()
{
    return cy.get('[data-cy="settings-btn"]')
}

}
export default new HomePage()