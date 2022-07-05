import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-professor',
  templateUrl: './consultar-professor.component.html',
  styleUrls: ['./consultar-professor.component.css']
})
export class ConsultarProfessorComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

//atributos para armazenas os dados dos professores
professor: any[] = [];


 //metodo de execuçao quando componente é aberto
 ngOnInit(): void {
  this.httpClient.get(environment.apiUrl + '/professor').subscribe(
    (data) => { this.professor= data as any[]; },
    (e) => { console.log(e);

    }
  )
}

  //função para fazer a exclusão do professor na API
  excluir(idProfessor:number):void{

    if(window.confirm('Deseja realmente excluir o aluno selecionado?')){
      this.httpClient.delete(environment.apiUrl + "/professor/" + idProfessor,
      {responseType : 'text'})
      .subscribe(
        (data) =>{

          alert(data); //exibir mensagem em uma janela popup
          this.ngOnInit(); //recarregar a consulta de professor

        },
        (e)=>{
          console.log(e);
        }
      )
    }

  }





}
