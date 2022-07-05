import { environment } from '../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-turma',
  templateUrl: './cadastrar-turma.component.html',
  styleUrls: ['./cadastrar-turma.component.css']
})
export class CadastrarTurmaComponent implements OnInit {

  //atributo
  mensagem: string = '';

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
  }

  //estrutura do formulario
  formCadastro = new FormGroup ({
    //campos formulario
    ano: new FormControl('',[Validators.required]),
    semestre: new FormControl('',[Validators.required]),
   
  })

  //acessando o formulario/pagina HTML pegando dados tela
  get form():any{
    return this.formCadastro.controls;
  }

//fazer chamada de cadastro na API
onSubmit(): void{
  this.HttpClient.post(environment.apiUrl+'/turma',
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
