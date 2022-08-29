import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { LoginComponent } from './login/login.component';
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
import { ModalAcercaComponent } from './modal-acerca/modal-acerca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MusicComponent } from './music/music.component';
import { ProyectoComponent } from './proyecto/proyecto.component';





const firebaseConfig = {
  apiKey: "AIzaSyB9tw44OffzMP-oe_xmwQbkhwaVsscwRIc",
  authDomain: "portfoliowr-2022.firebaseapp.com",
  projectId: "portfoliowr-2022",
  storageBucket: "portfoliowr-2022.appspot.com",
  messagingSenderId: "567439846605",
  appId: "1:567439846605:web:7847d86893f03291260d84"
};

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    LoginComponent,
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
    ModalAcercaComponent,
    SkillsComponent,
    ProgressBarComponent,
    MusicComponent,
    ProyectoComponent,
 

    
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
  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
