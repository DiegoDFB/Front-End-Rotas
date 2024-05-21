import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './produtos/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'produtos', component: ListarProdutosComponent},
  {path: 'produto/cadastrar', component: CadastrarProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
