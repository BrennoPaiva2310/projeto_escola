import { AuthHelper } from './../_helper/auth-helper';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //mensagem_sucesso: string = '';
  mensagem_erro: string = '';
  exibirPagina: boolean = false;

  constructor(
    private HttpClient: HttpClient,
    private authHelper: AuthHelper
  ) { }
  formLogin = new FormGroup({
    login: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });
  get form(): any {
    return this.formLogin.controls;
  }
  ngOnInit(): void {
    if (this.authHelper.isAutenticated()) {
      // redirecionamento....
      window.location.href = "/consultar-alunos";
    } else {
      this.exibirPagina = true;
    }
  }
  onSubmit(): void {
    //this.mensagem_sucesso = '';
    this.mensagem_erro = '';


    this.HttpClient.post(environment.apiUrl + "/loginAluno",
      this.formLogin.value,
      { responseType: 'text' }).
      subscribe(
        data => {
          //this.mensagem_sucesso = 'Autenticação realizada com sucesso';

          //salvar o TOKEN na LOCAL STORAGE
          localStorage.setItem('access_token', data);

          //salvar o login do usuário na LOCAL STORAGE
          localStorage.setItem('login_usuario', this.formLogin.value.login);
          this.formLogin.reset(); //limpara o formulário.
          //redirecionamento
          window.location.href = "/consultar-alunos";

        },
        e => {
          this.mensagem_erro = e.error;
          console.log(e.error);
        }
      );
  }
}
