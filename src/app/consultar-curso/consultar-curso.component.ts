import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-curso',
  templateUrl: './consultar-curso.component.html',
  styleUrls: ['./consultar-curso.component.css']
})
export class ConsultarCursoComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  //atributos para armazenas os dados dos cursos
  curso: any[] = [];


  //metodo de execuçao quando componente é aberto
 ngOnInit(): void {
  this.httpClient.get(environment.apiUrl + '/curso').subscribe(
    (data) => { this.curso = data as any[]; },
    (e) => { console.log(e);

    }
  )
}

//função para fazer a exclusão do curso na API
excluir(idCurso:number):void{

  if(window.confirm('Deseja realmente excluir o curso selecionado?')){
    this.httpClient.delete(environment.apiUrl + "/curso/" + idCurso,
    {responseType : 'text'})
    .subscribe(
      (data) =>{

        alert(data); //exibir mensagem em uma janela popup
        this.ngOnInit(); //recarregar a consulta de cursos

      },
      (e)=>{
        console.log(e);
      }
    )
  }

}



}