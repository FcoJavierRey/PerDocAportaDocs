
import { PerDocAportaDocData } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.data";
import { LoginData } from "../Pages/login/login.data";
import { LoginMethods } from "../Pages/login/login.methods";
import { Logger } from "../util/logger";
import { PerDocAportaDocMethods } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.methods";

describe(PerDocAportaDocData.testSuites.AportarDocumentacion, () => {

  it("Aportar Documentación", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocAportaDocMethods.navigatePerDocAportaDoc1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocAportaDocs");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password )
    Logger.verification("Verificar que se ha conectado en SUA correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Aportar Nueva Documentación");
    PerDocAportaDocMethods.navigatePerDocAportaDoc();
    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocAportaDocMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Aportar Documentación");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocAportaDocs/Solicitud');

    Logger.stepNumber(4);
    Logger.step("Aportar Documentación");
    Logger.subStep("Pulsar Aportar documentación");
    PerDocAportaDocMethods.clicOnAportarDocumentacion();
    Logger.verification("Muestra mensaje de aportación de documentación");
    PerDocAportaDocMethods.verPantaAportarDocumentacion(); 
    Logger.subStep("Pulsar Aceptar");
    PerDocAportaDocMethods.clicOnBotonAceptar();
    Logger.verification("Verificar que se muestra la página de Nueva Solicitud");
    cy.location('pathname').should('contains', 'PERDOC/PerDocAportaDocs/Formulario/NuevaSolicitud');
  
     });

     it("Añadir Documento Correcto", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    PerDocAportaDocMethods.navigatePerDocAportaDoc1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocAportaDocs");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password )
    Logger.verification("Verificar que se ha conectado en SUA correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Aportar Nueva Documentación");
    PerDocAportaDocMethods.navigatePerDocAportaDoc();
    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocAportaDocMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Aportar Documentación");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocAportaDocs/Solicitud');

    Logger.stepNumber(4);
    Logger.step("Aportar Documentación");
    Logger.subStep("Pulsar Aportar documentación");
    PerDocAportaDocMethods.clicOnAportarDocumentacion();
    Logger.verification("Muestra mensaje de aportación de documentación");
    PerDocAportaDocMethods.verPantaAportarDocumentacion(); 
    Logger.subStep("Pulsar Aceptar");
    PerDocAportaDocMethods.clicOnBotonAceptar();
    Logger.verification("Verificar que se muestra la página de Nueva Solicitud");
    cy.location('pathname').should('contains', 'PERDOC/PerDocAportaDocs/Formulario/NuevaSolicitud');

    Logger.stepNumber(5);
    Logger.step("Añadir documento");
    Logger.subStep("Pulsar Añadir documento");
    PerDocAportaDocMethods.clicOnBotonAñadirDocumento();
    Logger.verification("Pantalla Aportación de documentos");
    PerDocAportaDocMethods.verPantaAportacionDocumentos(); 
    Logger.subStep("Rellenar Documento");
    //PerDocAportaDocMethods.clicOnCampoConvocatoria();
    PerDocAportaDocMethods.insertConvocatoria(PerDocAportaDocData.Convocatoriasample.Convocatoria);
    PerDocAportaDocMethods.clicOnCampoActividad();
    PerDocAportaDocMethods.insertActividad(PerDocAportaDocData.Actividadsample.Actividad);
    PerDocAportaDocMethods.clicOnCampoFuncion();
    PerDocAportaDocMethods.insertFuncion(PerDocAportaDocData.Funcionsample.Funcion);
    PerDocAportaDocMethods.clicOnCampoTipoDocumento();
    PerDocAportaDocMethods.insertTipoDocumento(PerDocAportaDocData.TipoDocumentosample.TipoDocumento);
    PerDocAportaDocMethods.clicOnCampoEntidadOrganizadora();
    PerDocAportaDocMethods.insertEntidadOrganizadora(PerDocAportaDocData.EntidadOrganizadorasample.EntidadOrganizadora);
    PerDocAportaDocMethods.insertFechaInicio(PerDocAportaDocData.FechaIniciosample.FechaInicio);
    PerDocAportaDocMethods.insertFechaFin(PerDocAportaDocData.FechaFinsample.FechaFin);
    PerDocAportaDocMethods.insertCursoAcademico(PerDocAportaDocData.CursoAcademicosample.CursoAcademico);
    PerDocAportaDocMethods.insertFechaExpedicion(PerDocAportaDocData.FechaExpedicionsample.FechaExpedicion);
    PerDocAportaDocMethods.insertNumeroExpediente(PerDocAportaDocData.NumeroExpedientesample.NumeroExpediente);
    PerDocAportaDocMethods.insertTituloActividad(PerDocAportaDocData.TituloActividadsample.TituloActividad);
    PerDocAportaDocMethods.insertSeleccionarArchivoOk();
    Logger.subStep("Pulsar botón + Añadir");
    PerDocAportaDocMethods.clicOnBotonAñadirMerito();  
    Logger.verification("Verificar que se muestra la página Resumen de documentos Documentos a aportar");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocAportaDocs/Formulario/GetSolicitud');
    });

     it("Añadir Documento Incorrecto", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    PerDocAportaDocMethods.navigatePerDocAportaDoc1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocAportaDocs");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password )
    Logger.verification("Verificar que se ha conectado en SUA correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(3);
    Logger.step("Aportar Nueva Documentación");
    PerDocAportaDocMethods.navigatePerDocAportaDoc();
    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocAportaDocMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Aportar Documentación");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocAportaDocs/Solicitud');

    Logger.stepNumber(4);
    Logger.step("Aportar Documentación");
    Logger.subStep("Pulsar Aportar documentación");
    PerDocAportaDocMethods.clicOnAportarDocumentacion();
    Logger.verification("Muestra mensaje de aportación de documentación");
    PerDocAportaDocMethods.verPantaAportarDocumentacion(); 
    Logger.subStep("Pulsar Aceptar");
    PerDocAportaDocMethods.clicOnBotonAceptar();
    Logger.verification("Verificar que se muestra la página de Nueva Solicitud");
    cy.location('pathname').should('contains', 'PERDOC/PerDocAportaDocs/Formulario/NuevaSolicitud');

    Logger.stepNumber(5);
    Logger.step("Añadir documento");
    Logger.subStep("Pulsar Añadir documento");
    PerDocAportaDocMethods.clicOnBotonAñadirDocumento();
    Logger.verification("Pantalla Aportación de documentos");
    PerDocAportaDocMethods.verPantaAportacionDocumentos(); 
    Logger.subStep("Rellenar Documento");
    PerDocAportaDocMethods.insertConvocatoria(PerDocAportaDocData.Convocatoriasample.Convocatoria);
    PerDocAportaDocMethods.insertActividad(PerDocAportaDocData.Actividadsample.Actividad);
    PerDocAportaDocMethods.insertFuncion(PerDocAportaDocData.Funcionsample.Funcion);
    PerDocAportaDocMethods.insertTipoDocumento(PerDocAportaDocData.TipoDocumentosample.TipoDocumento);
    PerDocAportaDocMethods.insertEntidadOrganizadora(PerDocAportaDocData.EntidadOrganizadorasample.EntidadOrganizadora);
    PerDocAportaDocMethods.insertFechaExpedicion(PerDocAportaDocData.FechaExpedicionsample.FechaExpedicion);
    PerDocAportaDocMethods.insertTituloActividad(PerDocAportaDocData.TituloActividadsample.TituloActividad);
    PerDocAportaDocMethods.insertSeleccionarArchivoWrong();
    Logger.subStep("Pulsar botón + Añadir");
    PerDocAportaDocMethods.clicOnBotonAñadirMerito();  
    Logger.verification("Verificar que se muestra el mensaje no se han rellenado campos obligatorios o formatos incorrectos");
    PerDocAportaDocMethods.verPantaFormatoIncorrecto();  
     });

 
});