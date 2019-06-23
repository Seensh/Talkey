import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
//import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Início',
      urls:[{title: 'Início', url: '/home'}]
    },
    component: HomeComponent
  }
];

@NgModule({
  imports: [FormsModule, 
            CommonModule, 
           // NgxChartsModule, 
            RouterModule.forChild(routes)],
  declarations: [HomeComponent]
})
export class HomeModule {}
