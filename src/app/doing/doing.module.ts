import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoingPage } from './doing.page';
import {SharedModule} from '../shared/shared.module';
import {ToDoEntryDoingComponent} from './to-do-entry-doing/to-do-entry-doing.component';

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
  declarations: [DoingPage, ToDoEntryDoingComponent]
})
export class DoingPageModule {}
