import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string ='Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} esta em promoção`;
  idProduto: number =123;
  precoProduto: number = 2.59;
  promocao: boolean = true;


  constructor() {
    /*/console.log('Nome do Produtos: ', this.nomeProduto);
    console.log('O' + this.anuncio + 'está em promoção');
    console.log(this.anuncio);
    console.log('Id do Produto: ', this.idProduto);
    console.log( 'Preço do Produto: ', this.precoProduto );
    console.log('Promoção', this.promocao);

    let idade = 10
    console.log ('Minha idade é:', idade)

    function ImprimeIdade(){
    var idade = 20
    console.log ('Minha idade é:', idade)
    }
    ImprimeIdade();

    function imprimeIdade(){
      for(var idade = 30; idade <= 40; idade++){
        console.log('Idade dentro do for: ', idade)
      }
      console.log('Idade fora do dor: ', idade)
    }
    imprimeIdade(); /*/


 /*  function ex1(){
    var variavel = 0;
    var variavel = 10;
    console.log('variável', variavel);
    var outra_variavel = 20;
    var outra_variavel = 30;
    console.log('Outra variável', outra_variavel);
  }
  ex1();*/

  /*/  function ex2(){
    let variavel =0 ; variavel = 10;
    console.log('variável', variavel);
    let outra_variavel = 20; outra_variavel = 30;
    console.log('Outra variável', outra_variavel);
  }
  ex2();/*/
         //   DEU ERRADO POIS ESTA A UTILIZAR O LET
///////////////////////////////////////////////////////////////
/*  var a = 10;
  let b = 20;
  function bar(){
    var a = 30;
    let b = 40;
    if(true) {
      var a = 50;
      let b = 60;
      console.log('Variável a dentro do if', a);
      console.log('Variável b dentro do if', b);
    }
    console.log('Variável a dentro da função', a);
    console.log('Variável b dentro da função', b);
  }
  bar();
      console.log('Variável a fora da função', a);
      console.log('Variável b fora da função', b); /*/


///////////////////////////////////////////////////////////////
   /* let a = 1;
    function bar() {
      console.log('variável a: ', a);
      let b = 2;
      if(true){
        let c = 3;
        let a = 4;
        console.log('Variável a dentro do if', a);
        console.log('Variável b dentro do if', b);
        console.log('Variável c dentro do if', c);
      }
      console.log('Variável a fora da função', a);
      console.log('Variável b fora da função', b);
      console.log(c);

    }
    bar(); /*/
////////////////////////////////////////////////////////////////////////////////////////////////
    var a = 5;
    var b = 10;
    if(a = 5){
      let a = 4;
      var b = 1;
      console.log('Variável a dentro do if', a);
      console.log('Variável b dentro do if', b);
    }
      console.log('Variável a fora da função', a);
      console.log('Variável b fora da função', b);
  }


  ngOnInit(): void {

  }

}
