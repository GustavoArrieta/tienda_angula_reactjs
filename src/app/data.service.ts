import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { Http, Headers} from '@angular/http';

@Injectable()
export class DataService {
  private productos: string[] = [];
  private usuarios: string[] = [];

  constructor(private logService: LogService, private httpService : HttpService, private http : Http){ }

 
getProductos(){
return this.http.get('https://tiendaonline-productos.firebaseio.com/')
.map((response : Response) => response.json())
}

  getUsers(){
    this.httpService.getDatos()
      .subscribe(
        (data: Response) => console.log(data)
      )
    return this.usuarios;
  }
  

}

