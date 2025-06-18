export class PerDocAportaDocElements {
  static get Menu() {
    return {   

       get  Salir() {
           return cy.contains('a', ' Salir')
         },

          
       get  CerrarSesion() {
        return  cy.get('a[href="/educacion/PERDOC/PerDocAportaDocs/Acceso/SignOut"]');
         },

       get  BotonAdministracion() {
        return  cy.get('a[href="/educacion/PERDOC/PerDocAportaDocs/Administrador"]');
         },

        
    };
  }
}