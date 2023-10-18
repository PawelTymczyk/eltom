import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialsComponent } from './materials/materials.component';
import { RealizationsComponent } from './realizations/realizations.component';

const routes: Routes = [
    { path: 'main-page', component: MainPageComponent},
    { path: 'realizations', component: RealizationsComponent},
    { path: 'materials', component: MaterialsComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: 'main-page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
