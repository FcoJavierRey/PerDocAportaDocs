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

  static get textboxes() {
    return {
      get Convocatoria() {
        return cy.get('div[id="divConvocatoria"] span');
        },
      
       get Actividad() {
        return cy.get('div[id="divTipoActividad"] span');
        },
       
       get Funcion() {
        return cy.get('div[id="divFuncion"] span');
        }, 

       get TipoDocumento() {
        return cy.get('div[id="divTipoDocumento"] span');
        }, 

        get EntidadOrganizadora() {
        return cy.get('div[id="divEntidadOrg"] span');
        }, 
 
        get FechaInicio() {
        return cy.get('input#tbFInicio');
        }, 

        get FechaFin() {
        return cy.get('input#tbFFin');
        }, 

        get CursoAcademico() {
        return cy.get('input#tbCursoAcademico');
        }, 

        get FechaExpedicion() {
        return cy.get('input#tbFExpedicion');
        }, 

        get NumeroExpediente() {
        return cy.get('input#tbNExpediente');
        }, 
        get TituloActividad() {
        return cy.get('input#tbTitActividad');
        },
        get SeleccionarArchivo() {
        return cy.get('input[type="file"]');
        },

      }
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

      static get BotonAñadirDocumento() {
        return cy.get('button[id="load_modulo_meritos"] span');
    }

      static get BotonAñadirMerito() {
        return cy.get('button[id="btnAnadirMerito"] span');
    }

     static get PantaAportacionDocumentos() {
        return cy.contains('h1', 'APORTACIÓN DE DOCUMENTOS');
    }

     
}