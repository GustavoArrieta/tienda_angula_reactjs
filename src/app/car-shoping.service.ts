import { Injectable } from '@angular/core';


@Injectable()
export class CarShopingService {
  private item : any = {};
  private carShoping : any[] = [];
  private articulos : any[] = [];

  constructor() {}

  setArticulos(articulos){
    this.articulos = articulos;
  }

  getArticulos(){
    return this.articulos;
  }

  setItem(item){
  	this.item = item;
  }

  getItem() {
  	return this.item;
  }

  setCarShoping(){
    do {
      this.carShoping.pop();
    } while (this.carShoping.length > 0);
  }
gregarItemShoping(cant){
    for (var i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i]._id == this.item._id){
        this.articulos[i].stock = this.articulos[i].stock - cant;
      }
    }

    let encontrado = -1;
    for (var j = 0; j < this.carShoping.length; j++) {
      if(this.carShoping[j].item._id == this.item._id){
        encontrado = j;
      }
    }
    }
  

  agregarItemShoping(cant){
   var encontrado = -1;

   for (var i = 0; i < this.carShoping.length; i++) {

   if(this.carShoping[i].item.id == this.item.id){
   encontrado = i;
   break;
  }
  }

  if(encontrado != -1){
  this.carShoping[encontrado].cantidad = this.carShoping[encontrado].cantidad + cant;
  } else {
 this.carShoping.push({item: this.item, cantidad: cant})
 }
}

   getCarShoping(){
    return this.carShoping;
  }
}

