import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-aluno',
  templateUrl: './consultar-alunos.component.html',
  styleUrls: ['./consultar-alunos.component.css']
})
export class ConsultarAlunosComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

//atributos para armazenas os dados dos alunos
aluno: any[] = [];


 //metodo de execuçao quando componente é aberto
 ngOnInit(): void {
  this.httpClient.get(environment.apiUrl + '/alunos').subscribe(
    (data) => { this.aluno = data as any[]; },
    (e) => { console.log(e);

    }
  )
}

  //função para fazer a exclusão do aluno na API
  excluir(idAluno:number):void{

    if(window.confirm('Deseja realmente excluir o aluno selecionado?')){
      this.httpClient.delete(environment.apiUrl + "/alunos/" + idAluno,
      {responseType : 'text'})
      .subscribe(
        (data) =>{

          alert(data); //exibir mensagem em uma janela popup
          this.ngOnInit(); //recarregar a consulta de profissionais

        },
        (e)=>{
          console.log(e);
        }
      )
    }

  }





}
