
import { PerDocAportaDocData } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.data";
import { PerDocAportaDocElements } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.elements";
import { LoginData } from "../Pages/login/login.data";
import { LoginMethods } from "../Pages/login/login.methods";
import { Logger } from "../util/logger";
import { PerDocAportaDocMethods } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.methods";

describe(PerDocAportaDocData.testSuites.AñadirSolicitud, () => {

  it("Añadir Solicitud", () => {
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
     
     });

    
});