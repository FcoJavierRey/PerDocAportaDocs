export class Logger {
  static stepNumber(number) {
    const text = `Paso # ${number}`;
    cy.log(text);
    cy.allure().step(text);
  }

  static step(description) {
    const text = `Paso - ${description}`;
    cy.log(text);
    cy.allure().step(text);
  }

  static verification(description) { 
    const text = `Verificacion - ${description}`;
    cy.log(text);
    cy.allure().step(text);
  }

  static subStep(description) {
    const text = `Subpaso - ${description}`;
    cy.log(text);
    cy.allure().step(text);
  }

  static subVerification(description) {
    const text = `Subverificacion - ${description}`;
    cy.log(text);
    cy.allure().step(text);
  }

  static postCondition(description) {
    const text = `POSTCONDICION - ${description}`;
    cy.log(text);
    cy.allure().step(text);
  }
}
