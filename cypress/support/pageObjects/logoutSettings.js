class LogoutPage{

    Clicklogoutbtn()
    {
        return cy.contains('Log Out')
    
    }
    getlogoutBtn(){
       return  cy.get('button').contains('Log Out')
    }
}
export default new LogoutPage()