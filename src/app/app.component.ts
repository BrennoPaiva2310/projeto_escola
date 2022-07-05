import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto_professor';

  //função para fazer o logout do usuario..

    //atributos
    isAuthenticated: boolean = false;
    loginUsuario: String | null = '';
    isAuthenticatedProfessor: boolean = false;
    loginProfessor: String | null = '';


    ngOnInit(): void {
      this.isAuthenticated = localStorage.getItem("access_token") != null && localStorage.getItem("login_usuario") != null;
      
      if (this.isAuthenticated) {
        this.loginUsuario = localStorage.getItem("login_usuario");
      }
      
      this.isAuthenticatedProfessor = localStorage.getItem("access_token") != null && localStorage.getItem("login_professor") != null;

      if (this.isAuthenticatedProfessor) {
        this.loginProfessor = localStorage.getItem("login_professor");
      }
    }
    //função para fazer o logout do usuario..
    logout(): void {
      if (window.confirm('Deseja realmente  sair do sistema?')) {
        // apagar as informações gravadas na local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('login_usuario');
        localStorage.removeItem('access_professor');
        localStorage.removeItem('login_professor');

       
        //redirecionar para a pagina inicial do projeto (login)
        window.location.href = '/';
      }
    }
}


