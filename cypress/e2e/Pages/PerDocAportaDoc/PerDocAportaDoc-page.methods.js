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
 
}