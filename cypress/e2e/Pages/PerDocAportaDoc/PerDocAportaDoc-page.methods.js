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

  static clicOnBotonAñadirDocumento() {
    PerDocAportaDocElements.BotonAñadirDocumento.click();
  }

   static clicOnBotonAñadirMerito() {
    PerDocAportaDocElements.BotonAñadirMerito.click();
  }

   static verPantaAportacionDocumentos() {
    PerDocAportaDocElements.PantaAportacionDocumentos.should('exist');
  }

  static insertConvocatoria(Convocatoria){
          PerDocAportaDocElements.textboxes.Convocatoria.invoke('val', Convocatoria);
  }

   static insertActividad(Actividad){
          PerDocAportaDocElements.textboxes.Actividad.type(Actividad);
  }

   static insertFuncion(Funcion){
          PerDocAportaDocElements.textboxes.Funcion.type(Funcion);
  }

  static insertTipoDocumento(TipoDocumento){
          PerDocAportaDocElements.textboxes.TipoDocumento.type(TipoDocumento);
  }

  static insertEntidadOrganizadora(EntidadOrganizadora){
          PerDocAportaDocElements.textboxes.EntidadOrganizadora.type(EntidadOrganizadora);
  }

  static insertFechaInicio(FechaInicio){
          PerDocAportaDocElements.textboxes.FechaInicio.invoke('val', FechaInicio);
  }
 
  static insertFechaFin(FechaFin){
          PerDocAportaDocElements.textboxes.FechaFin.invoke('val', FechaFin);
  }

  static insertCursoAcademico(CursoAcademico){
          PerDocAportaDocElements.textboxes.CursoAcademico.invoke('val', CursoAcademico);
  }

  static insertFechaExpedicion(FechaExpedicion){
          PerDocAportaDocElements.textboxes.FechaExpedicion.invoke('val', FechaExpedicion);
  }

   static insertNumeroExpediente(NumeroExpediente){
          PerDocAportaDocElements.textboxes.NumeroExpediente.invoke('val', NumeroExpediente);
  }

  static insertTituloActividad(TituloActividad){
          PerDocAportaDocElements.textboxes.TituloActividad.invoke('val', TituloActividad);
  }

   static insertSeleccionarArchivoOk(){
          cy.get('input[type="file"]').selectFile('cypress/fixtures/Adjuntar documentación trabajo.png', { action: 'drag-drop' });
  }

    static insertSeleccionarArchivoWrong(){
          cy.get('input[type="file"]').selectFile('cypress/fixtures/&Curriculum incorrecto%.txt', { action: 'drag-drop' });
  }
}