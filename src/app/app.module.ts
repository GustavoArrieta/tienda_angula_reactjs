import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { HttpService } from './http.service';
import { CarShopingService } from './car-shoping.service';

import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DashComponent } from './dash/dash.component';
import { DetalleitemComponent } from './detalleitem/detalleitem.component';
import { LoginComponent } from './login/login.component';
import { MenubarComponent } from './menubar/menubar.component';
import { DataService } from './data.service';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    CatalogoComponent,
    DashComponent,
    DetalleitemComponent,
    LoginComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [HttpService, CarShopingService, DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
