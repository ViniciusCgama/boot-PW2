import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string ='Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} esta em promoção`;
  idProduto: number =3.5;
  precoProduto: number = 2.5;
  promocao: boolean = false;
  foto:string = "../assets/img/crud.png"
  dataValidade = '2021-12-31'


  constructor() {
    console.log('Nome do Produtos: ', this.nomeProduto);
    console.log('O' + this.anuncio + 'está em promoção');
    console.log(this.anuncio);
    console.log('Id do Produto: ', this.idProduto);
    console.log( 'Preço do Produto: ', this.precoProduto );
    console.log('Promoção', this.promocao);
  }
    ngOnInit(): void {
    }
  }
