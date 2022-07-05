import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-turma',
  templateUrl: './consultar-turma.component.html',
  styleUrls: ['./consultar-turma.component.css']
})
export class ConsultarTurmaComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

//atributos para armazenas os dados das turmaas
turma: any[] = [];


 //metodo de execuçao quando componente é aberto
 ngOnInit(): void {
  this.httpClient.get(environment.apiUrl + '/turma').subscribe(
    (data) => { this.turma= data as any[]; },
    (e) => { console.log(e);

    }
  )
}

  //função para fazer a exclusão da turma na API
  excluir(idTurma:number):void{

    if(window.confirm('Deseja realmente excluir a turma selecionada?')){
      this.httpClient.delete(environment.apiUrl + "/turma/" + idTurma,
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
