import { PerDocAportaDocData } from "./PerDocAportaDoc-page.data";
import { PerDocAportaDocElements } from "./PerDocAportaDoc-page.elements";
export class PerDocAportaDocMethods {
  static navigatePerDocAportaDoc1() {
    cy.clearAllCookies();
    cy.clearLocalStorage()
    cy.visit(PerDocAportaDocData.url);
 }

   static navigatePerDocAportaDoc() {
    cy.visit(PerDocAportaDocData.url);
 }

 static clicOnSalir() {
    PerDocAportaDocElements.Menu.Salir.click();
  }

 static clicOnCerrarSesion() {
    PerDocAportaDocElements.Menu.CerrarSesion.click();
  }

  static clicOnBotonEntrar() {
    PerDocAportaDocElements.BotonEntrar.click();
  }

 static clicOnAportarDocumentacion() {
    PerDocAportaDocElements.BotonAportarDocumentacion.click();
  }

  static verPantaAportarDocumentacion() {
    PerDocAportaDocElements.PantaAportarDocumentacion.should('exist');
  }

   static clicOnBotonAceptar() {
    PerDocAportaDocElements.BotonAceptar.click();
  }
 
}