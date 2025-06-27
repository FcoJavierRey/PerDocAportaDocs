
import { PerDocAportaDocData } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.data";
import { PerDocAportaDocElements } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.elements";
import { LoginData } from "../Pages/login/login.data";
import { LoginMethods } from "../Pages/login/login.methods";
import { Logger } from "../util/logger";
import { PerDocAportaDocMethods } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.methods";

describe(PerDocAportaDocData.testSuites.PresentarDocumentacion, () => {

    it("Guardar Documento", () => {
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
    //LoginMethods.insertNifSupervisor(LoginData.NifSupervisorsample.NifSupervisor)
    //LoginMethods.insertPasswordSupervisor(LoginData.NifSupervisorsample.PasswordSupervisor)

    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocAportaDocMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Aportar Documentación");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocAportaDocs/Solicitud');

    Logger.stepNumber(4);
    Logger.step("Aportar Documentación");
    Logger.subStep("Comprobar si hay una solicitud guardada");
    cy.get('input#addSolicitud').then(($button) => {
    if ($button.is(':disabled')) {
      // Si el botón Aportar documentación no está activo
      // existe una solicitud guardada: pulsamos entonces en ella para añadir documento
        Logger.subStep("Seleccionamos la Solicitud Guardada");
        PerDocAportaDocMethods.clicOnSolicitudGuardada();
        Logger.verification("Verificar que se muestra la página de Añadir Documento");
        cy.location('pathname').should('contains', 'PERDOC/PerDocAportaDocs/Formulario/GetSolicitud');
    } else {
      // Si el botón Aportar documentación está activo lo pulsamos y seguimos el proceso
      Logger.subStep("Pulsar Aportar documentación");
      PerDocAportaDocMethods.clicOnAportarDocumentacion();
      Logger.verification("Muestra mensaje de aportación de documentación");
      PerDocAportaDocMethods.verPantaAportarDocumentacion(); 
      Logger.subStep("Pulsar Aceptar");
      PerDocAportaDocMethods.clicOnBotonAceptar();
      Logger.verification("Verificar que se muestra la página de Nueva Solicitud");
      cy.location('pathname').should('contains', 'PERDOC/PerDocAportaDocs/Formulario/NuevaSolicitud');
    }
  });
    

    Logger.stepNumber(5);
    Logger.step("Añadir documento");
    Logger.subStep("Pulsar Añadir documento");
    PerDocAportaDocMethods.clicOnBotonAñadirDocumento();
    Logger.verification("Pantalla Aportación de documentos");
    PerDocAportaDocMethods.verPantaAportacionDocumentos(); 
    Logger.subStep("Rellenar Documento");
    PerDocAportaDocMethods.clicOnCampoConvocatoria();
    PerDocAportaDocMethods.escribirConvocatoria(PerDocAportaDocData.Convocatoriasample.Convocatoria);
    PerDocAportaDocMethods.clicOnCampoActividad();
    PerDocAportaDocMethods.escribirActividad(PerDocAportaDocData.Actividadsample.Actividad);
    PerDocAportaDocMethods.clicOnCampoFuncion();
    PerDocAportaDocMethods.escribirFuncion(PerDocAportaDocData.Funcionsample.Funcion);
    PerDocAportaDocMethods.clicOnCampoTipoDocumento();
    PerDocAportaDocMethods.escribirTipoDocumento(PerDocAportaDocData.TipoDocumentosample.TipoDocumento);
    PerDocAportaDocMethods.clicOnCampoEntidadOrganizadora();
    PerDocAportaDocMethods.escribirEntidadOrganizadora(PerDocAportaDocData.EntidadOrganizadorasample.EntidadOrganizadora);
    PerDocAportaDocMethods.insertFechaInicio(PerDocAportaDocData.FechaIniciosample.FechaInicio);
    PerDocAportaDocMethods.insertFechaFin(PerDocAportaDocData.FechaFinsample.FechaFin);
    PerDocAportaDocMethods.insertCursoAcademico(PerDocAportaDocData.CursoAcademicosample.CursoAcademico);
    PerDocAportaDocMethods.insertFechaExpedicion(PerDocAportaDocData.FechaExpedicionsample.FechaExpedicion);
    PerDocAportaDocMethods.insertNumeroExpediente(PerDocAportaDocData.NumeroExpedientesample.NumeroExpediente);
    PerDocAportaDocMethods.insertTituloActividad(PerDocAportaDocData.TituloActividadsample.TituloActividad);
    PerDocAportaDocMethods.clicOnCampoObservaciones();
    PerDocAportaDocMethods.insertSeleccionarArchivoOk();
    Logger.subStep("Pulsar botón + Añadir");
    PerDocAportaDocMethods.clicOnBotonAñadirMerito();  
    Logger.verification("Verificar que se muestra la página Resumen de documentos Documentos a aportar");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocAportaDocs/Formulario/GetSolicitud');

    Logger.stepNumber(6);
    Logger.step("Guardar documento");
    Logger.subStep("Pulsar Guardar documento");
    PerDocAportaDocMethods.clicOnBotonGuardarDocumento();
    Logger.subStep("Presenta pantalla Solicitud guardada");
    // Su solicitud ha sido guardada correctamente. Para que sea tramitada debe pulsar en Presentar.
    PerDocAportaDocMethods.verPantaSolicitudGuardada();
    PerDocAportaDocMethods.clicOnBotonSolicitudGuardada();
    Logger.verification("Verificar que se muestra la página de Solicitud Guardada");
    cy.location('pathname').should('contains', 'PERDOC/PerDocAportaDocs/Formulario/GetSolicitud');
    });

     it("Generar PDF", () => {
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
    //LoginMethods.insertNifSupervisor(LoginData.NifSupervisorsample.NifSupervisor)
    //LoginMethods.insertPasswordSupervisor(LoginData.NifSupervisorsample.PasswordSupervisor)

    LoginMethods.insertNifUsuario(LoginData.NifUsuariosample.NifUsuario)
    PerDocAportaDocMethods.clicOnBotonEntrar();
    Logger.verification("Verificar que se muestra la página de Aportar Documentación");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocAportaDocs/Solicitud');

    Logger.stepNumber(4);
    Logger.step("Aportar Documentación");
    Logger.subStep("Comprobar si hay una solicitud guardada");
    cy.get('input#addSolicitud').then(($button) => {
    if ($button.is(':disabled')) {
      // Si el botón Aportar documentación no está activo
      // existe una solicitud guardada: pulsamos entonces en ella para añadir documento
        Logger.subStep("Seleccionamos la Solicitud Guardada");
        PerDocAportaDocMethods.clicOnSolicitudGuardada();
        Logger.verification("Verificar que se muestra la página de Añadir Documento");
        cy.location('pathname').should('contains', 'PERDOC/PerDocAportaDocs/Formulario/GetSolicitud');
    } else {
      // Si el botón Aportar documentación está activo lo pulsamos y seguimos el proceso
      Logger.subStep("Pulsar Aportar documentación");
      PerDocAportaDocMethods.clicOnAportarDocumentacion();
      Logger.verification("Muestra mensaje de aportación de documentación");
      PerDocAportaDocMethods.verPantaAportarDocumentacion(); 
      Logger.subStep("Pulsar Aceptar");
      PerDocAportaDocMethods.clicOnBotonAceptar();
      Logger.verification("Verificar que se muestra la página de Nueva Solicitud");
      cy.location('pathname').should('contains', 'PERDOC/PerDocAportaDocs/Formulario/NuevaSolicitud');
    }
  });
    

    Logger.stepNumber(5);
    Logger.step("Añadir documento");
    Logger.subStep("Pulsar Añadir documento");
    PerDocAportaDocMethods.clicOnBotonAñadirDocumento();
    Logger.verification("Pantalla Aportación de documentos");
    PerDocAportaDocMethods.verPantaAportacionDocumentos(); 
    Logger.subStep("Rellenar Documento");
    PerDocAportaDocMethods.clicOnCampoConvocatoria();
    PerDocAportaDocMethods.escribirConvocatoria(PerDocAportaDocData.Convocatoriasample.Convocatoria);
    PerDocAportaDocMethods.clicOnCampoActividad();
    PerDocAportaDocMethods.escribirActividad(PerDocAportaDocData.Actividadsample.Actividad);
    PerDocAportaDocMethods.clicOnCampoFuncion();
    PerDocAportaDocMethods.escribirFuncion(PerDocAportaDocData.Funcionsample.Funcion);
    PerDocAportaDocMethods.clicOnCampoTipoDocumento();
    PerDocAportaDocMethods.escribirTipoDocumento(PerDocAportaDocData.TipoDocumentosample.TipoDocumento);
    PerDocAportaDocMethods.clicOnCampoEntidadOrganizadora();
    PerDocAportaDocMethods.escribirEntidadOrganizadora(PerDocAportaDocData.EntidadOrganizadorasample.EntidadOrganizadora);
    PerDocAportaDocMethods.insertFechaInicio(PerDocAportaDocData.FechaIniciosample.FechaInicio);
    PerDocAportaDocMethods.insertFechaFin(PerDocAportaDocData.FechaFinsample.FechaFin);
    PerDocAportaDocMethods.insertCursoAcademico(PerDocAportaDocData.CursoAcademicosample.CursoAcademico);
    PerDocAportaDocMethods.insertFechaExpedicion(PerDocAportaDocData.FechaExpedicionsample.FechaExpedicion);
    PerDocAportaDocMethods.insertNumeroExpediente(PerDocAportaDocData.NumeroExpedientesample.NumeroExpediente);
    PerDocAportaDocMethods.insertTituloActividad(PerDocAportaDocData.TituloActividadsample.TituloActividad);
    PerDocAportaDocMethods.clicOnCampoObservaciones();
    PerDocAportaDocMethods.insertSeleccionarArchivoOk();
    Logger.subStep("Pulsar botón + Añadir");
    PerDocAportaDocMethods.clicOnBotonAñadirMerito();  
    Logger.verification("Verificar que se muestra la página Resumen de documentos Documentos a aportar");
    cy.location('pathname').should('contains', 'educacion/PERDOC/PerDocAportaDocs/Formulario/GetSolicitud');

    Logger.stepNumber(6);
    Logger.step("Generar PDF");
    Logger.subStep("Pulsar Generar PDF");
    PerDocAportaDocMethods.clicOnBotonGenerarPDF();
    Logger.subStep("Presenta formulario PDF");
    Logger.verification("Verificar que se muestra el formulario PDF");
    
    // Obtiene la referencia a la nueva ventana
     cy.window().then((win) => {
      const newWindow = win.open('https://wwwpre.educacion.org/educacion/PERDOC/PerDocAportaDocs/Formulario/GenerarPDF?idSolicitud=33120', '_blank'); // Accede a la nueva ventana
      cy.wrap(newWindow).then((newWin) => {
      Logger.verification("Verificar que se muestra el formulario PDF");
      cy.request('https://wwwpre.educacion.org/educacion/PERDOC/PerDocAportaDocs/Formulario/GenerarPDF?idSolicitud=33120')   
     // Cierra la nueva ventana
        cy.wrap(newWin).invoke('close');
      });
    });

      cy.window().then((win) => {
    cy.stub(win, 'open').as('open')
  })
  // confirm the window.open stub was called
  // with expected URL
  Logger.verification("Verificar que se muestra el formulario PDF");
  cy.get('@open').should('have.been.calledWith','https://wwwpre.educacion.org/educacion/PERDOC',)
    });
 
});