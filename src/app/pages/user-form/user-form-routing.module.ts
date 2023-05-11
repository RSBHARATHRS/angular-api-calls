import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form.component';
import { DeactivateGuard } from 'src/app/guards/deactivate.guard';

const routes: Routes = [{
  path: '',
  component: UserFormComponent,
  canDeactivate: [DeactivateGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFormRoutingModule { }
