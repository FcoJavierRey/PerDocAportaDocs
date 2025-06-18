export class PerDocAportaDocElements {
  static get Menu() {
    return {   

       get  Salir() {
           return cy.contains('a', ' Salir')
         },

         
       get  CerrarSesion() {
        return  cy.get('a[href="/educacion/PERDOC/PerDocAportaDocs/Acceso/SignOut"]');
         },

         
    };
  }

   static get  BotonGenerarPDF() {
        return  cy.contains('a', 'Generar PDF');
    } 

    static get BotonEntrar() {
        return cy.get('button[type="submit"]');
    }

    static get BotonAportarDocumentacion() {
        return cy.get('input#addSolicitud');
    }

    static get PantaAportarDocumentacion() {
        return cy.get('div[role="document"] p');
    }

    static get BotonAceptar() {
        return cy.contains('button', 'Aceptar');
    }
     
}