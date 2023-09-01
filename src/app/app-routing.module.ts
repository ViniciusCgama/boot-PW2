import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './components/produtos/listar/listar.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CadastrarComponent } from './components/produtos/cadastrar/cadastrar.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarComponent},
  {path:'produtos/cadastrar', component:CadastrarComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
