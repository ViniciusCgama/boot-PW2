import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './components/produtos/listar/listar.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CadastrarComponent } from './components/produtos/cadastrar/cadastrar.component';
import { HomeComponent } from './components/home/home.component';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt)

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarComponent},
  {path:'produtos/cadastrar', component:CadastrarComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

providers: [
  {provide: LOCALE_ID, useValue: 'pt-BR'}
],
bootstrap: [AppComponent]})

export class AppRoutingModule { }

