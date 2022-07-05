import { TokenInterceptor } from './_interceptor/tokenInterceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ConsultarAlunosComponent } from './consultar-alunos/consultar-alunos.component';
import { CadastrarAlunosComponent } from './cadastrar-alunos/cadastrar-alunos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { EditarAlunosComponent } from './editar-alunos/editar-alunos.component';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { ConsultarProfessorComponent } from './consultar-professor/consultar-professor.component';
import { ConsultarCursoComponent } from './consultar-curso/consultar-curso.component';

import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { CadastrarTurmaComponent } from './cadastrar-turma/cadastrar-turma.component';
import { ConsultarTurmaComponent } from './consultar-turma/consultar-turma.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';
import { AccountProfessorComponent } from './account-professor/account-professor.component';
import { LoginProfessorComponent } from './login-professor/login-professor.component';



const routes: Routes = [
  {path: 'cadastrar-alunos', component:CadastrarAlunosComponent},
  {path: 'consultar-alunos', component: ConsultarAlunosComponent},
  {path:'editar-alunos/:id', component: EditarAlunosComponent},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar-professor', component:CadastrarProfessorComponent},
  {path: 'consultar-professor', component: ConsultarProfessorComponent},
  {path:'editar-professor/:id', component: EditarProfessorComponent},
  {path: 'cadastrar-curso', component:CadastrarCursoComponent},
  {path: 'consultar-curso', component: ConsultarCursoComponent},
  {path:'editar-curso/:id', component: EditarCursoComponent},
  {path: 'cadastrar-turma', component:CadastrarTurmaComponent},
  {path: 'consultar-turma', component: ConsultarTurmaComponent},
  {path:'editar-turma/:id', component: EditarTurmaComponent},
  {path: 'login-professor', component: LoginProfessorComponent},
  {path: 'account-professor', component: AccountProfessorComponent},




]


@NgModule({
  declarations: [
    AppComponent,
    CadastrarAlunosComponent,
    ConsultarAlunosComponent,
    EditarAlunosComponent,
    LoginComponent,
    AccountComponent,
    CadastrarProfessorComponent,
    EditarProfessorComponent,
    ConsultarProfessorComponent,
    CadastrarCursoComponent,
    ConsultarCursoComponent,
    EditarCursoComponent,
    CadastrarTurmaComponent,
    ConsultarTurmaComponent,
    EditarTurmaComponent,
    LoginProfessorComponent,
    AccountProfessorComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{  provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
