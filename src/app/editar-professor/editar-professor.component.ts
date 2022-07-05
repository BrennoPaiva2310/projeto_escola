import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.component.html',
  styleUrls: ['./editar-professor.component.css']
})


export class EditarProfessorComponent implements OnInit {

  mensagem: string = '';


  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

  const idProfessor = this.activatedRoute.snapshot.paramMap.get('id') as string;


  this.httpClient.get(environment.apiUrl + "/professor/" + idProfessor).subscribe(

    (data:any) =>{


      this.formEdicao.patchValue(data);

    },
    (e) =>{
      console.log(e);
    }

  )

  }

  formEdicao = new FormGroup({


  idProfessor: new FormControl(''),
  nome: new FormControl('',[Validators.required]),
  endereco: new FormControl('',[Validators.required]),


});


get form():any{

  return this.formEdicao.controls;

}




onSubmit():void{

  this.httpClient.put(environment.apiUrl + '/professor', this.formEdicao.value,
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
