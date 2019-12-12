import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CarShopingService } from '../car-shoping.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {
	articulos : any[] = [];
  productos : any;
	articuloFilter: any = {nombre: '' };
	cantidadAdd;

  constructor(private carShopingService : CarShopingService, private router: Router, private httpService : HttpService, private data : DataService) {}
 

  ngOnInit() {


  this.data.getProductos()
  .subscribe(
  (data) => this.productos = data
  )

    this.articulos = this.carShopingService.getArticulos();
    if(this.articulos.length == 0) {
      this.httpService.getProductos()
      .subscribe(
      data => {
     this.articulos = data.productos;
     this.carShopingService.setArticulos(this.articulos);
      }, error => {
       console.log(error);
        }
      );
    }
  }

  verMas(articuloSel) {
    this.carShopingService.setItem(articuloSel);
    this.router.navigate(['/dash/detalleitem']);
  }

  addCanasta(articuloSel) {
    if(!isNaN(this.cantidadAdd)) {
      this.carShopingService.setItem(articuloSel);
      this.carShopingService.agregarItemShoping(this.cantidadAdd);
    }
  }


 

 
  
}
