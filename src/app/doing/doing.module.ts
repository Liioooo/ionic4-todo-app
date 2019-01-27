import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoingPage } from './doing.page';
import {SharedModule} from '../shared/shared.module';
import {ToDoEntryComponent} from './to-do-entry/to-do-entry.component';

const routes: Routes = [
  {
    path: '',
    component: DoingPage
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
  declarations: [DoingPage, ToDoEntryComponent]
})
export class DoingPageModule {}
