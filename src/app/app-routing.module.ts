import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaEditComponent } from './acerca-edit/acerca-edit.component';
import { EducacionEditComponent } from './educacion-edit/educacion-edit.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ExperienciaEditComponent } from './experiencia-edit/experiencia-edit.component';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ModalAcercaComponent } from './modal-acerca/modal-acerca/modal-acerca.component';
import { MusicComponent } from './music/music.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProyectoComponent } from './proyecto/proyecto.component';


import { HardEditComponent} from './hard-edit/hard-edit.component';
import { ModalEncabezadoComponent } from './modal-encabezado/modal-encabezado.component';
import { ModalExperienciaComponent } from './modal-experiencia/modal-experiencia.component';
import { NgModelGroup } from '@angular/forms';
import { ModalEducacionComponent } from './modal-educacion/modal-educacion.component';
import { ModalEncabezadoNombreComponent } from './modal-encabezado-nombre/modal-encabezado-nombre.component';
import { ModalProyectoComponent } from './modal-proyecto/modal-proyecto.component';
import { ModalHtmlComponent } from './modal-html/modal-html.component';
import { ModalExperienciaImgComponent } from './modal-experiencia-img/modal-experiencia-img.component';
import { ModalEducacionImgComponent } from './modal-educacion-img/modal-educacion-img.component';
import { ModalProyectoImgComponent } from './modal-proyecto-img/modal-proyecto-img.component';
//import { LoginComponent } from './login/login.component';
import { GuardianGuard } from './guardian.guard';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/compat/auth-guard';
import { ModalComunicacionComponent } from './modal-comunicacion/modal-comunicacion.component';
import { ModalJsComponent } from './modal-js/modal-js.component';
import { ModalCreatividadComponent } from './modal-creatividad/modal-creatividad.component';
import { ModalCssComponent } from './modal-css/modal-css.component';
import { ModalPensamientocriticoComponent } from './modal-pensamientocritico/modal-pensamientocritico.component';
import { ModalAngularComponent } from './modal-angular/modal-angular.component';
import { ModalLiderazgoComponent } from './modal-liderazgo/modal-liderazgo.component';
import { ModalJavaComponent } from './modal-java/modal-java.component';
import { ModalGestiondeltiempoComponent } from './modal-gestiondeltiempo/modal-gestiondeltiempo.component';
import { ModalMysqlComponent } from './modal-mysql/modal-mysql.component';
import { ModalActitudpositivaComponent } from './modal-actitudpositiva/modal-actitudpositiva.component';


const routes: Routes = [
 { path:'',redirectTo: "/portfolio", pathMatch:'full'},//sacarla    
 
  { path: "portfolio", component: PortfolioComponent },
  { path: "iniciar-sesion", component: IniciarSesionComponent},


  { path: "home", component: HomeComponent, canActivate:[GuardianGuard]},


  { path: "music", component:MusicComponent},
  { path: "acerca-edit", component:AcercaEditComponent},
  { path: "educacion-edit", component:EducacionEditComponent},
  { path: "modal-acerca", component:ModalAcercaComponent},
  { path: "experiencia-edit", component:ExperienciaEditComponent},
  
  { path: "modal-encabezado", component: ModalEncabezadoComponent},
  { path: "modal-experiencia", component: ModalExperienciaComponent},
  { path: "modal-educacion",component: ModalEducacionComponent},
  { path: "modal-encabezado-nombre",component: ModalEncabezadoNombreComponent},
  { path: "modal-proyecto", component: ModalProyectoComponent},
  { path: "modal-html", component: ModalHtmlComponent},
  { path: "modal-experiencia-img", component: ModalExperienciaImgComponent},
  { path: "modal-educacion-img", component: ModalEducacionImgComponent},
  { path: "modal-proyecto-img", component: ModalProyectoImgComponent},
  { path: "modal-comunicacion", component: ModalComunicacionComponent},
  { path: "modal-js", component: ModalJsComponent},
  { path:"modal-creatividad", component: ModalCreatividadComponent},
  { path: "modal-css", component: ModalCssComponent},
  { path: "modal-pensamientocritico", component: ModalPensamientocriticoComponent},
  { path: "modal-angular", component: ModalAngularComponent},
  { path: "modal-liderazgo", component: ModalLiderazgoComponent},
  { path: "modal-java", component: ModalJavaComponent},
  { path: "modal-gestiondeltiempo", component: ModalGestiondeltiempoComponent},
  { path: "modal-mysql", component: ModalMysqlComponent},
  { path: "modal-actitudpositiva", component: ModalActitudpositivaComponent},

  { path:'**',redirectTo: "/portfolio", pathMatch:'full'} // si pones cualquier url diferente va a portfolio 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //cualquier cosa quitar use hashfirebase login
  exports: [RouterModule]
})
export class AppRoutingModule { }
