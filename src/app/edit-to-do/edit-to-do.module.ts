import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditToDoPage } from './edit-to-do.page';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EditToDoPage
  }
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      SharedModule,
      ReactiveFormsModule,
      IonicModule,
      RouterModule.forChild(routes)
  ],
  declarations: [EditToDoPage]
})
export class EditToDoPageModule {}
