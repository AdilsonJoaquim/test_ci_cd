describe('Exemplo de teste em CI/CD com GitHub Actions', () => {
  it('Executando o teste', () => {
    cy.visit('https://www.sepe.gov.ao/ao/utentes/login.php')

    cy.get('#usr').type('meu_email')
    cy.get('#pwd').type('minha_senha')

    cy.get('.submitBtn').click()

    cy.url('inclue', 'https://www.sepe.gov.ao/ao/utentes/')
  })
})