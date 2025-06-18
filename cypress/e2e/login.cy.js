
import { PerDocAportaDocMethods } from "./Pages/PerDocAportaDoc/PerDocAportaDoc-page.methods";
import { LoginData } from "./Pages/login/login.data";
import { LoginMethods } from "./Pages/login/login.methods";
import { Logger } from "./util/logger";

describe('PerDocAportaDoc: Login de usuario', ()=>{
    it('Login de usuario'), (username, password)=>{
            Logger.stepNumber(1);
            Logger.step("Navegar a la página de inicio de sesión");
            PerDocAportaDocMethods.navigatePerDocReclamaciones1();
                
            Logger.stepNumber(2);
            Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
            LoginMethods.insertUsername(LoginData.validCredentials.username);
            LoginMethods.insertPassword(LoginData.validCredentials.password);
        
            Logger.stepNumber(3);
            Logger.subStep("Hacer clic en botón Conectar");    
            LoginMethods.clickOnLoginButton();
           
            Logger.stepNumber(4); 
            Logger.subStep("Comprobar que muestra pantalla PerDocReclamaciones");  
            PerDocReclamacionesMethods.verifyPermisos();
    }
})