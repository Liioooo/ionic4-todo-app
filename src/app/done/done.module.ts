import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DonePage } from './done.page';
import { ToDoEntryDoneComponent } from './to-do-entry-done/to-do-entry-done.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DonePage
  }
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      SharedModule,
      RouterModule.forChild(routes)
  ],
  declarations: [DonePage, ToDoEntryDoneComponent]
})
export class DonePageModule {}
