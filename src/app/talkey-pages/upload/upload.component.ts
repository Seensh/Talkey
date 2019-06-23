import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  source: LocalDataSource;
  gridVisivel: boolean = true;

  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });

  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  //Criar lote para envio de aúdios
  criarLote() {
    this.gridVisivel = false;
  }

  //Voltar para grid de lotes
  voltar() {
    this.gridVisivel = true;
  }

  //Salvar
  salvar(){
    
  }

  settings = {
    actions: false,
    columns: {
      id: {
        title: 'ID',
        filter: true
      },
      name: {
        title: 'Nome',
        filter: true
      },
      username: {
        title: 'Quantidade',
        filter: true
      },
      email: {
        title: 'Data',
        filter: true
      }
    }
    /*     edit: {
          editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
          saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
          cancelButtonContent: '<i class="ti-close text-danger"></i>'
        },
        delete: {
          deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
          saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
          cancelButtonContent: '<i class="ti-close text-danger"></i>'
        } */
  }

  data = [
    {
      id: 1,
      name: 'Arquivos ',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca'
    },
    {
      id: 6,
      name: 'Sunil Joshi',
      username: 'suniljoshi',
      email: 'suniljoshi@melissa.tv'
    },
    {
      id: 7,
      name: 'Nirav joshi',
      username: 'niravjoshi',
      email: 'niravjoshi@yesenia.net'
    },
    {
      id: 8,
      name: 'Vishal bhatt',
      username: 'vbhatt',
      email: 'vbhatt.OConner@kory.org'
    },
    {
      id: 9,
      name: 'Bhavesh patel',
      username: 'bhavesh',
      email: 'bhavesh@annie.ca'
    },
    {
      id: 10,
      name: 'Darshan patel',
      username: 'Darshan',
      email: 'Darshan@annie.ca'
    },
    {
      id: 11,
      name: 'Hitesh patel',
      username: 'Hitesh',
      email: 'Hitesh@annie.ca'
    }
  ];


}
