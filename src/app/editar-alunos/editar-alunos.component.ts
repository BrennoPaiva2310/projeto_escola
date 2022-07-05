import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-alunos.component.html',
  styleUrls: ['./editar-alunos.component.css']
})


export class EditarAlunosComponent implements OnInit {

  mensagem: string = '';


  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

  const idAluno = this.activatedRoute.snapshot.paramMap.get('id') as string;


  this.httpClient.get(environment.apiUrl + "/alunos/" + idAluno).subscribe(

    (data:any) =>{


      this.formEdicao.patchValue(data);

    },
    (e) =>{
      console.log(e);
    }

  )

  }

  formEdicao = new FormGroup({


  idAluno: new FormControl(''),
  nome: new FormControl('',[Validators.required]),
  endereco: new FormControl('',[Validators.required]),


});


get form():any{

  return this.formEdicao.controls;

}




onSubmit():void{

  this.httpClient.put(environment.apiUrl + '/alunos', this.formEdicao.value,
  {responseType: 'text'})
  .subscribe(
    data => {
      this.mensagem = data;
    },
    e =>{

      this.mensagem = "Erro na hora de editar"
      console.log(e);

    }

  )

}

}
