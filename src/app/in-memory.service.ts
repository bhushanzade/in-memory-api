import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
@Injectable({
  providedIn: 'root'
})
export class InMemoryService {

  constructor() { }

  createDb() {

    let documents = [
      {
        id: 1,
        document_name: 'Sample Template For Resume',
        document: '<p>This is the <strong>default </strong>CKEditor 4 installation. Source editing is provided by the <a href="https://ckeditor.com/cke4/addon/sourcearea">Source Editing Area</a>&nbsp;plugin.</p><p>Follow the steps below to try it out:</p><ul><li>Click the <strong>Source </strong>button to display the HTML source of this text in the source editing area.</li><li>Click the <strong>Source </strong>button again to return to the WYSIWYG view.</li></ul>',
        create_date: 'Fri May 07 2021 23:28:30 GMT+0530 (India Standard Time)',
        updated_date: 'Fri May 07 2021 23:28:30 GMT+0530 (India Standard Time)',
      },
      {
        id: 2,
        document_name: 'Template For Resume Part 2',
        document: '<p>This is the <strong>default </strong>CKEditor 4 installation. Source editing is provided by the <a href="https://ckeditor.com/cke4/addon/sourcearea">Source Editing Area</a>&nbsp;plugin.</p><p>Follow the steps below to try it out:</p><ul><li>Click the <strong>Source </strong>button to display the HTML source of this text in the source editing area.</li><li>Click the <strong>Source </strong>button again to return to the WYSIWYG view.</li></ul>',
        create_date: 'Fri May 07 2021 23:28:30 GMT+0530 (India Standard Time)',
        updated_date: 'Fri May 07 2021 23:28:30 GMT+0530 (India Standard Time)',
      }
    ];

    let history_documents = [
      {
        id: 1,
        doc_id: 1,
        document_name: 'Sample Template For Resume 89899',
        document: '<p>This is the <strong>default </strong>CKEditor 4 installation. Source editing is provided by the <a href="https://ckeditor.com/cke4/addon/sourcearea">Source Editing Area</a>&nbsp;plugin.</p><p>Follow the steps below to try it out:</p><ul><li>Click the <strong>Source </strong>button to display the HTML source of this text in the source editing area.</li><li>Click the <strong>Source </strong>button again to return to the WYSIWYG view.</li></ul>',
        create_date: 'Fri May 07 2021 23:28:30 GMT+0530 (India Standard Time)',
        updated_date: 'Fri May 07 2021 23:28:30 GMT+0530 (India Standard Time)',
      },
      // {
      //   id: 2,
      //   doc_id: 2,
      //   document_name: 'Template For Resume Part 2',
      //   document: '<p>This is the <strong>default </strong>CKEditor 4 installation. Source editing is provided by the <a href="https://ckeditor.com/cke4/addon/sourcearea">Source Editing Area</a>&nbsp;plugin.</p><p>Follow the steps below to try it out:</p><ul><li>Click the <strong>Source </strong>button to display the HTML source of this text in the source editing area.</li><li>Click the <strong>Source </strong>button again to return to the WYSIWYG view.</li></ul>',
      //   create_date: 'Fri May 07 2021 23:28:30 GMT+0530 (India Standard Time)',
      //   updated_date: 'Fri May 07 2021 23:28:30 GMT+0530 (India Standard Time)',
      // }
    ];

    return { documents, history_documents };
  }
}

export class ManageDocument {
  id: number;
  document_name: string = '';
  document: string = '';
  create_date: Date = new Date();
  updated_date: Date = new Date();
}

export class HistoryDocument {
  doc_id: string = '';
  document_name: string = '';
  document: string = '';
  create_date: Date = new Date();
  updated_date: Date = new Date();
}