import { LoginMethods } from "../Pages/login/login.methods";
import { LoginData } from "../Pages/login/login.data";
import { Logger } from "../util/logger";
import { PerDocAportaDocData } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.data";
import { PerDocAportaDocElements } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.elements";
import { PerDocAportaDocMethods } from "../Pages/PerDocAportaDoc/PerDocAportaDoc-page.methods";

describe(PerDocAportaDocData.testSuites.autenticacion, () => {
    it("Usuario autorizado a funcionalidad", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    PerDocAportaDocMethods.navigatePerDocAportaDoc1();
        
    Logger.stepNumber(2);
    Logger.step("Ingresar un nombre de usuario autorizado");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Conectar" para iniciar sesión');
    LoginMethods.clickOnLoginButton();
    Logger.verification("Verificar que se muestra la página de Inicio Sesión exitoso");
    LoginMethods.verifyUser();
  });

  it("Credenciales inválidas", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    PerDocAportaDocMethods.navigatePerDocAportaDoc1();
        
    Logger.stepNumber(2);
    Logger.step("Ingresar credenciales no válidas");
    LoginMethods.insertUsername(LoginData.invalidCredentials.username);
    LoginMethods.insertPassword(LoginData.invalidCredentials.password);

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Conectar" para iniciar sesión');
    LoginMethods.clickOnLoginButton();
    Logger.verification("Verificar que se muestra el mensaje Credenciales Inválidas");
    LoginMethods.verifyAlert();
  });

  it("Cerrar sesión SUA", () => {
    Logger.stepNumber(1);
     Logger.step("Navegar a la página de inicio");
     PerDocAportaDocMethods.navigatePerDocAportaDoc1();
    
    Logger.stepNumber(2);
    Logger.step("Iniciar Sesión en PerDocAportaDoc");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password )
    Logger.verification("Verificar que se ha conectado en SUA correctamente");
    LoginMethods.verifyUser();

    Logger.stepNumber(4);
    Logger.step("Cerrar sesión");
    PerDocAportaDocMethods.navigatePerDocAportaDoc();
    PerDocAportaDocMethods.clicOnSalir();
    Logger.verification("Verificar que se muestra la página de Cierre de sesión exitoso");
    cy.location('pathname').should('contains', 'educacion/web/personal/docente');
    
     });
   
});
