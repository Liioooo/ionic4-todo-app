import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'edit-to-do/:id', loadChildren: './edit-to-do/edit-to-do.module#EditToDoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
