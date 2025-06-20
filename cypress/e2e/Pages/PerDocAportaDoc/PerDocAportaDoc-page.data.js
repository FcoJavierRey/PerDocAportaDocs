export class PerDocAportaDocData {

static get url() {
    return "https://wwwpre.educacion.org/educacion/perdoc/perdocaportadocs/acceso";
  };

static get urlRevision() {
    return "https://www3.gobiernodecanarias.org/educacion/cau_ce/cas/login";
  };

static get urlNuevaSolicitud() {
    return "hhttps://wwwpre.educacion.org/educacion/PERDOC/PerDocAportaDocs/Formulario/NuevaSolicitud";
  };

  static get Convocatoriasample() {
    return {
      Convocatoria: "PROCEDIMIENTO DE OPOSICIONES 2025 - INSP: Acceso Libre (Opo)",
    }; 
  } 

   static get Actividadsample() {
    return {
      Actividad: "DIPLOMA DE ESTUDIOS AVANZADOS",
    }; 
  } 

   static get Funcionsample() {
    return {
      Funcion: "SIN FUNCIÓN DOCENTE",
    }; 
  } 

  static get TipoDocumentosample() {
    return {
      TipoDocumento: "DIPLOMA",
    }; 
  } 
 
    static get EntidadOrganizadorasample() {
    return {
      EntidadOrganizadora: "ACADEMIA CANARIA DE CIENCIAS",
    }; 
  } 

  static get FechaIniciosample() {
    return {
      FechaInicio: "01/06/2020",
    }; 
  } 

    static get FechaFinsample() {
    return {
      FechaFin: "30/06/2024",
    }; 
  } 

    static get CursoAcademicosample() {
    return {
      CursoAcademico: "2024",
    }; 
  } 

    static get FechaExpedicionsample() {
    return {
      FechaExpedicion: "30/06/2025",
    }; 
  } 

    static get NumeroExpedientesample() {
    return {
      NumeroExpediente: "9999/99",
    }; 
  } 
  
     static get TituloActividadsample() {
    return {
      TituloActividad: "Diploma de estudios avanzados",
    }; 
  }

    static get SeleccionarArchivoOk() {
    return {
      ArchivoOK: "'cypress/fixtures/Adjuntar documentación trabajo.png'",
    }; 
  }

    static get SeleccionarArchivoWrong() {
    return {
      ArchivoWrong: "'cypress/fixtures/&Curriculum incorrecto%.txt'",
    }; 
  } 
 
 

static get testSuites() {
    return {
      autenticacion: "PerDocAportaDoc: Autenticación",
      AportarDocumentacion: "PerDocAportaDoc: Aportación Documentos",
      AñadirSolicitud: "PerDocAportaDoc: Añadir Solicitud",
      PresentarDocumentacion: "PerDocAportaDoc: Presentar Documentación",
      };
  }

  
}
