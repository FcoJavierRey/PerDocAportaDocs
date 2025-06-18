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


 
static get testSuites() {
    return {
      autenticacion: "PerDocAportaDoc: Autenticación",
      AportarDocumentacion: "PerDocAportaDoc: Aportación Documentos",
      };
  }

  
}
