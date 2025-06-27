import { PerDocAportaDocData } from "./PerDocAportaDoc-page.data";

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
        return cy.contains('span', 'Todas');
        },

         get ConvocatoriaBox() {
         return cy.get('div[id="ddConvocatoriaMeritos_chosen"] input');
        },

           
       get Actividad() {
        return cy.get('div[id="ddTipoActividadMeritos_chosen"] span');
        },

        get ActividadBox() {
        return cy.get('div[id="divTipoActividad"] input');
        },
       
       get Funcion() {
        return cy.get('div[id="divFuncion"] span');
        }, 

         get FuncionBox() {
        return cy.get('div[id="ddFuncionMeritos_chosen"] input');
        }, 

       get TipoDocumento() {
        return cy.get('div[id="divTipoDocumento"] span');
        }, 

        get TipoDocumentoBox() {
        return cy.get('div[id="ddTipoDocumentoMeritos_chosen"] input');
        }, 

        get EntidadOrganizadora() {
        return cy.get('div[id="divEntidadOrg"] span');
        }, 

          get EntidadOrganizadoraBox() {
        return  cy.get('div[id="ddEntidadMeritos_chosen"] input');
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

        get  Observaciones() {
        return cy.get('input#tbObservaciones');
        },
        get SeleccionarArchivo() {
        return cy.get('input[type="file"]');
        },

      }
   }

   static get  BotonGenerarPDF() {
        return  cy.get('button#btn-generar-pdf');
    } 

     static get  BotonPresentar() {
        return  cy.get('button[id="btn-presentar"] div');
    } 

    static get  SolicitudGuardada() {
        return  cy.contains('td', 'Guardada');
    } 

    static get BotonEntrar() {
        return cy.get('button[type="submit"]');
    }

     static get BotonAceptarSolicitudGuardada() {
        return cy.contains('button', 'Aceptar');
    }

    static get BotonAportarDocumentacion() {
        return cy.get('input#addSolicitud');
    }

    static get PantaAportarDocumentacion() {
        return cy.get('div[role="document"] p');
    }

     static get PantaFormatoIncorrecto() {
        return cy.get('div[id="divMensajeErrores"] strong');
    }

    static get BotonAceptar() {
        return cy.contains('button', 'Aceptar');
    }

      static get BotonAñadirDocumento() {
        return cy.get('button[id="load_modulo_meritos"] span');
    }

     static get BotonGuardarDocumento() {
        return cy.get('button[type="submit"] div');
    }

      static get BotonAñadirMerito() {
        return cy.get('button[id="btnAnadirMerito"] span');
    }

     static get PantaAportacionDocumentos() {
        return cy.contains('h1', 'APORTACIÓN DE DOCUMENTOS');
    }

     
}