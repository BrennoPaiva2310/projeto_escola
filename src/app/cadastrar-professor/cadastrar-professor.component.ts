import { environment } from '../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.css']
})
export class CadastrarProfessorComponent implements OnInit {

  //atributo
  mensagem: string = '';

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
  }

  //estrutura do formulario
  formCadastro = new FormGroup ({
    //campos formulario
    nome: new FormControl('',[Validators.required]),
    endereco: new FormControl('',[Validators.required]),
   
  })

  //acessando o formulario/pagina HTML pegando dados tela
  get form():any{
    return this.formCadastro.controls;
  }

//fazer chamada de cadastro na API
onSubmit(): void{
  this.HttpClient.post(environment.apiUrl+'/professor',
  this.formCadastro.value,{responseType: 'text'}).subscribe(
    data =>{
      this.mensagem = data;
      this.formCadastro.reset();
    },
    e => {
      this.mensagem = "Cadastro nao realizado";
      console.log(e);
    }
  )
}
}
