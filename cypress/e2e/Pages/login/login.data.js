export class LoginData {
  static get validCredentials() {
    return {
      username: "ext-freygom",
      password: "Fer1123@",
    };
  }
  static get invalidCredentials() {
    return {
      username: "ext-freygom",
      password: "1234567890",
    }; 
  }
   
     static get NifUsuariosample() {
    return {
      NifUsuario: "9277099A",
    }; 
  }
  
    static get NifSupervisorsample() {
    return {
      NifSupervisor: "32786565L",
      PasswordSupervisor: "1234",
    }; 

  }

}
