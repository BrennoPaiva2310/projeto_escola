import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-turma.component.html',
  styleUrls: ['./editar-turma.component.css']
})
export class EditarTurmaComponent implements OnInit {

  //atributo
  mensagem: string = '';

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }


  //Função é executada quando a página é aberta
  ngOnInit(): void {
    const idTurma= this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get(environment.apiUrl + "/turma/" + idTurma).subscribe(

      (data: any) => {

        this.formEdicao.patchValue(data);
      },
      (e) => {
        console.log(e);
      }
    )
  }

  formEdicao = new FormGroup({
    idTurma: new FormControl(''),
    ano: new FormControl('', [Validators.required]),
    semestre: new FormControl('', [Validators.required]),
  });


  get form(): any {

    return this.formEdicao.controls;

  }

  //função para fazer a camada do edição na API
  onSubmit(): void {

    this.httpClient.put(environment.apiUrl + '/turma', this.formEdicao.value,
      { responseType: 'text' })
      .subscribe(
        data => {
          this.mensagem = data;
        },
        e => {

          this.mensagem = "Ocorreu um erro, a edição não foi realizada."
          console.log(e);

        }

      )
  }

}