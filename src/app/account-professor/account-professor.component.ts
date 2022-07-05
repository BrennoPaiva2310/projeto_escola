import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account-professor.component.html',
  styleUrls: ['./account-professor.component.css']
})
export class AccountProfessorComponent implements OnInit {
  messagem_success: string = '';
  messagem_error: string = '';

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
    login: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  })

  //acessando o formulario
  get form(): any {
    return this.formCadastro.controls;
  }

  onSubmit(): void {
    this.messagem_success = '';
    this.messagem_error = '';
    this.HttpClient.post(environment.apiUrl + "/accountProfessor",
      this.formCadastro.value,
      { responseType: 'text' }).
      subscribe(

        data => {
          this.messagem_success = data;
          this.formCadastro.reset();

        },
        e => {
          this.messagem_success = e;
          console.log(e.error);

        }
      );

  }

}
