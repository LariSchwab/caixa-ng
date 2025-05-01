import { Component } from '@angular/core';
import { Produto } from '../../../models/produtos';
import { FormsModule } from '@angular/forms';
import { CadastroReceitaComponent } from '../../receitas/cadastro-receita/cadastro-receita.component';

@Component({
  selector: 'app-cadastro-produto',
  imports: [FormsModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  nome: string = "";
  produtos: Array<Produto> = [];
  proximoId: number = 0;
  idParaEditar?: number;
  categoria: string = "";
  quantidade: number = 0;

  salvarProduto() {
    if (this.nome.length < 3) {
      alert("Nome deve conter no mínimo 3 caracteres")
      return;
    }
    if (this.nome.length > 30) {
      alert("Nome deve conter no mínimo 30 caracteres")
      return;
    }

    if (this.categoria.trim() === "") {
      alert("Selecione uma categoria");
      return;
    }

    if (this.quantidade <= 0 || isNaN(this.quantidade)) {
      alert("Selecione uma quantidade válida");
      return;
    }
  // || é condição OU mas que é usada assim no TS e no JS
  // isNaN verifica se variável não é um número válido

  if (this.idParaEditar == undefined) {
    this.cadastrarProduto();
  } else {
    this.editarProduto();
  }
  }

  editarProduto(){
    let indiceProduto = this.produtos.findIndex(x => x.id == this.idParaEditar);
    this.produtos[indiceProduto].nome = this.nome;
    this.produtos[indiceProduto].categoria = this.categoria;
    this.produtos[indiceProduto].quantidade = this.quantidade;

    this.idParaEditar = undefined;
  }

  cadastrarProduto() {
    this.proximoId++;
    let produto = new Produto(
        this.proximoId, 
        this.nome, 
        this.categoria, 
        this.quantidade);
  
    this.produtos.push(produto);
    
  }

  editar(produto: Produto) {
    this.nome = produto.nome;
    this.categoria = produto.categoria;
    this.idParaEditar = produto.id;
    this.quantidade = produto.quantidade;
  }

  apagar(produto: Produto) {
    let confirmacao = confirm(`Deseja realmente apagar o produto '${produto.nome}'?`);
      if(confirmacao == false)
        return
    let indiceProduto = this.produtos.findIndex(x => x.id == produto.id);
    this.produtos.splice(indiceProduto, 1);

    let confirmacaoCategoria = confirm(`Deseja realmente apagar o produto '${produto.categoria}'?`);
      if(confirmacaoCategoria == false)
        return
    
    let confirmacaoQtidade = confirm(`Deseja realmente apagar o produto '${produto.quantidade}'?`);
    if(confirmacaoQtidade == false)
      return

  }
}
