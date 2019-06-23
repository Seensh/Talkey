import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

import { UploadComponent } from './upload.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Upload de arquivos',
      urls: [
        { title: 'Início', url: '/home' },
        { title: 'Upload de arquivos', url: '/upload' },
      ]
    },
    component: UploadComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
    FileUploadModule
  ],
  declarations: [UploadComponent]
})
export class UploadModule { }
