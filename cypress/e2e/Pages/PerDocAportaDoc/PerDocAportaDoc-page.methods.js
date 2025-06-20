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

  static verPantaFormatoIncorrecto() {
    PerDocAportaDocElements.PantaFormatoIncorrecto.should('exist');
  }

   static clicOnBotonAceptar() {
    PerDocAportaDocElements.BotonAceptar.click();
  }

  static clicOnBotonAñadirDocumento() {
    PerDocAportaDocElements.BotonAñadirDocumento.click();
  }

   static clicOnBotonGuardarDocumento() {
    PerDocAportaDocElements.BotonGuardarDocumento.click();
  }

   static clicOnBotonAñadirMerito() {
    PerDocAportaDocElements.BotonAñadirMerito.click();
  }

   static verPantaAportacionDocumentos() {
    PerDocAportaDocElements.PantaAportacionDocumentos.should('exist');
  }

  static clicOnSolicitudGuardada() {
    PerDocAportaDocElements.SolicitudGuardada.click();
  }

   static verPantaSolicitudGuardada() {
    PerDocAportaDocElements.BotonAceptarSolicitudGuardada.should('exist');
  }
 static clicOnBotonSolicitudGuardada() {
    PerDocAportaDocElements.BotonAceptarSolicitudGuardada.click();
  }
   static clicOnCampoConvocatoria() {
    PerDocAportaDocElements.textboxes.Convocatoria.click();
  }
  static escribirConvocatoria(Convocatoria){
    PerDocAportaDocElements.textboxes.Convocatoria.type(Convocatoria).type("{enter}");
  }

 
  static clicOnCampoActividad() {
    PerDocAportaDocElements.textboxes.Actividad.click();
  }

   static escribirActividad(Actividad){
          PerDocAportaDocElements.textboxes.ActividadBox.type(Actividad).type("{enter}");
  }
 
  static clicOnCampoFuncion() {
    PerDocAportaDocElements.textboxes.Funcion.click();
  }

   static escribirFuncion(Funcion){
          PerDocAportaDocElements.textboxes.FuncionBox.type(Funcion).type("{enter}");
  }

  static clicOnCampoTipoDocumento() {
    PerDocAportaDocElements.textboxes.TipoDocumento.click();
  }

  static escribirTipoDocumento(TipoDocumento){
          PerDocAportaDocElements.textboxes.TipoDocumentoBox.type(TipoDocumento).type("{enter}");
  }

  static clicOnCampoEntidadOrganizadora() {
    PerDocAportaDocElements.textboxes.EntidadOrganizadora.click();
  }

  static clicOnCampoObservaciones() {
    PerDocAportaDocElements.textboxes.Observaciones.click();
  }
  static escribirEntidadOrganizadora(EntidadOrganizadora){
          PerDocAportaDocElements.textboxes.EntidadOrganizadoraBox.type(EntidadOrganizadora).type("{enter}");
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