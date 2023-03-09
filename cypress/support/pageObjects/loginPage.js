class loginPage
{
  visit() {
    cy.visit('https://beta-app.zujudigital.com/#sign-in')
  }
getTitle(){

  return cy.get('.MuiTypography-h2')
}
getEmail()
{

  return cy.get('input[placeholder="Enter your email address"]').clear()
}
getPassword()
{
    return cy.get('input[placeholder="Enter your password"]').clear()

}
getSubmit(){
   return  cy.contains('Log In')
}
getErrorMessage(){

    return cy.get('.MuiTypography-root.MuiTypography-body1.css-kzgg84')
}

login(email, password)
{
  this.getEmail().type(email)
  this.getPassword().type(password)
  this.getSubmit().click()
}
}
export default new loginPage()