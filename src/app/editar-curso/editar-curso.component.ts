import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})


export class EditarCursoComponent implements OnInit {

  mensagem: string = '';


  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

  const idCurso = this.activatedRoute.snapshot.paramMap.get('id') as string;


  this.httpClient.get(environment.apiUrl + "/curso/" + idCurso).subscribe(

    (data:any) =>{


      this.formEdicao.patchValue(data);

    },
    (e) =>{
      console.log(e);
    }

  )

  }

  formEdicao = new FormGroup({


  idCurso: new FormControl(''),
  nome: new FormControl('',[Validators.required]),
  sigla: new FormControl('',[Validators.required]),


});


get form():any{

  return this.formEdicao.controls;

}




onSubmit():void{

  this.httpClient.put(environment.apiUrl + '/curso', this.formEdicao.value,
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
