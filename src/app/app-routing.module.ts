import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ModalAcercaComponent } from './modal-acerca/modal-acerca.component';
import { MusicComponent } from './music/music.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: "portfolio", component: PortfolioComponent },
  { path: "iniciar-sesion", component: IniciarSesionComponent },
  { path: "home", component:HomeComponent},
  { path: "modal-acerca", component:ModalAcercaComponent},
  { path: "skills", component:SkillsComponent},
  { path: "music", component:MusicComponent}
  
  //{ path:'',redirectTo: "iniciar-sesion", pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //cualquier cosa quitar use hashfirebase login
  exports: [RouterModule]
})
export class AppRoutingModule { }
