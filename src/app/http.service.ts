
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class HttpService {

  constructor(private http : Http) { }

   getDatos(){
    return this.http.get('https://tiendaonline-89f24.firebaseio.com/.json')
      .map((response: Response)=> response.json())
      }

  
allArticulos(){
    return this.http.get('./articulos/all').map((response: Response) => response.json())
  }


postDatos(data){
    let datos = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('./articulos/update', datos, {headers: headers}).map((response: Response) => response.json())
  }
  
 
getProductos() {
return this.http.get('https://tiendaonline-productos.firebaseio.com/.json')
.map((response: Response) => response.json())
}

  

validarUsuario(user, pass){
let datos = JSON.stringify({email: user, password: pass});
let headers = new Headers();
headers.append('Content-Type', 'application/json');
return this.http.post('https://tiendaonline-89f24.firebaseio.com/.json', datos, {headers: headers}).map((response: Response) => {


console.log("RESPUESTA DEL FIREBASE:", response.json())

return response.json()

});

}

}



 