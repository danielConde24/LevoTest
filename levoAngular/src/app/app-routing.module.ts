import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FqaComponent } from './fqa/fqa.component';
import { LoginComponent } from './login/login.component';
import { AdministrationComponent } from './administration/administration.component';
import { PermissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
  { path: '', component: FqaComponent },
  { path: 'fqa', component: FqaComponent },
  { path: 'administration', component: AdministrationComponent, canActivate:[PermissionsGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
