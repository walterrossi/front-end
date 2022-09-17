import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardComponent } from './hard/hard.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './navbar/navbar.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

import { ModalEducacionComponent } from './modal-educacion/modal-educacion.component';
import { ModalExperienciaComponent } from './modal-experiencia/modal-experiencia.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MusicComponent } from './music/music.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { PieComponent } from './pie/pie.component';
import { AcercaEditComponent } from './acerca-edit/acerca-edit.component';
import { EducacionEditComponent } from './educacion-edit/educacion-edit.component';
import { EncabezadoEditComponent } from './encabezado-edit/encabezado-edit.component';
import { ExperienciaEditComponent } from './experiencia-edit/experiencia-edit.component';
import { ProyectoEditComponent } from './proyecto-edit/proyecto-edit.component';

import { HardEditComponent } from './hard-edit/hard-edit.component';
import { ModalEncabezadoComponent } from './modal-encabezado/modal-encabezado.component';
import { ModalAcercaComponent } from './modal-acerca/modal-acerca/modal-acerca.component';
import { ModalAcercaImgComponent } from './modal-acerca-img/modal-acerca-img.component';
import { ModalEncabezadoNombreComponent } from './modal-encabezado-nombre/modal-encabezado-nombre.component';
import { ModalProyectoComponent } from './modal-proyecto/modal-proyecto.component';
import { ModalHtmlComponent } from './modal-html/modal-html.component';
import { ModalExperienciaImgComponent } from './modal-experiencia-img/modal-experiencia-img.component';
import { ModalEducacionImgComponent } from './modal-educacion-img/modal-educacion-img.component';
import { ModalProyectoImgComponent } from './modal-proyecto-img/modal-proyecto-img.component';
import { ModalComunicacionComponent } from './modal-comunicacion/modal-comunicacion.component';
import { ModalJsComponent } from './modal-js/modal-js.component';
import { ModalCreatividadComponent } from './modal-creatividad/modal-creatividad.component';
import { ModalAngularComponent } from './modal-angular/modal-angular.component';
import { ModalCssComponent } from './modal-css/modal-css.component';
import { ModalPensamientocriticoComponent } from './modal-pensamientocritico/modal-pensamientocritico.component';
import { ModalLiderazgoComponent } from './modal-liderazgo/modal-liderazgo.component';
import { ModalJavaComponent } from './modal-java/modal-java.component';
import { ModalGestiondeltiempoComponent } from './modal-gestiondeltiempo/modal-gestiondeltiempo.component';
import { ModalMysqlComponent } from './modal-mysql/modal-mysql.component';
import { ModalActitudpositivaComponent } from './modal-actitudpositiva/modal-actitudpositiva.component';


import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
  apiKey: "AIzaSyCw06p-XiMJTqxLG6YW6h4dji4-nKNKNy0",
  authDomain: "walrossi22.firebaseapp.com",
  projectId: "walrossi22",
  storageBucket: "walrossi22.appspot.com",
  messagingSenderId: "732597210704",
  appId: "1:732597210704:web:cea631fb5a1b4816c7cb55",
  measurementId: "G-PQQTJZXWZ1"
};
//const app = initializeApp(firebaseConfig);



@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
   
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardComponent,
    HomeComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    NavbarComponent,
    EncabezadoComponent,
 
    ModalEducacionComponent,
    ModalExperienciaComponent,

   
   
    MusicComponent,
    ProyectoComponent,
    PieComponent,
    AcercaEditComponent,
    EducacionEditComponent,
    EncabezadoEditComponent,
    ExperienciaEditComponent,
    ProyectoEditComponent,
   
    HardEditComponent,
    ModalEncabezadoComponent,
    ModalAcercaComponent,
    ModalAcercaImgComponent,
    ModalEncabezadoNombreComponent,
    ModalProyectoComponent,
    ModalHtmlComponent,
    ModalExperienciaImgComponent,
    ModalEducacionImgComponent,
    ModalProyectoImgComponent,
    
    ModalComunicacionComponent,
    ModalJsComponent,
    ModalCreatividadComponent,
    ModalAngularComponent,
    ModalCssComponent,
    ModalPensamientocriticoComponent,
    ModalLiderazgoComponent,
    ModalJavaComponent,
    ModalGestiondeltiempoComponent,
    ModalMysqlComponent,
    ModalActitudpositivaComponent,
   
   
   
    
 

    
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())

    
    
  

  ],
  providers: [], //cookie service si no lo usamos borramos lo que esta entre corchetes
  bootstrap: [AppComponent],
  
})

export class AppModule { }
