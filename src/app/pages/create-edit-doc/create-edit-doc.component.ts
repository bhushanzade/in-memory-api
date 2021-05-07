import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentServiceService } from 'src/app/document-service.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HistoryDocument, ManageDocument } from 'src/app/in-memory.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Editor from '../../ckeditor/build/ckeditor';
@Component({
  selector: 'app-create-edit-doc',
  templateUrl: './create-edit-doc.component.html',
  styleUrls: ['./create-edit-doc.component.scss']
})
export class CreateEditDocComponent implements OnInit {
  model: ManageDocument;
  doc_id: string;
  public Editor = Editor;
  reactiveForm: FormGroup;
  private old_document: ManageDocument;
  ckConfig = environment.ckEditorConfig;
  constructor(
    private service: DocumentServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.model = new ManageDocument();
    this.old_document = new ManageDocument();
    this.reactiveForm = fb.group({
      document_name: ["", Validators.compose([Validators.required])],
      document: ["", Validators.compose([Validators.required])],
    });
  }

  get f() {
    return this.reactiveForm.controls;
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.doc_id = param['docid'];
      if (this.doc_id) this.getDocumentById(this.doc_id);
    })
  }

  getDocumentById(doc_id: string) {
    this.service.getDocumentById(doc_id).subscribe(res => {
      this.model = res;
      this.old_document = JSON.parse(JSON.stringify(res));
    })
  }

  saveDocument(): void {
    if (this.reactiveForm.invalid) {
      for (var i in this.reactiveForm.controls) {
        this.reactiveForm.controls[i].markAsTouched();
      }
      return;
    }
    this.model.updated_date = new Date();
    if (this.doc_id) {
      this.service.updateDocument(this.model, this.doc_id).subscribe(res => {
        this.createHistory(this.doc_id, 'Document Updated Successfully.');
      })
    } else {
      this.model.create_date = new Date();
      this.service.createDocumnet(this.model).subscribe(res => {
        alert('Document Created Successfully');
        this.reactiveForm.reset();
      })
    }
  }

  createHistory(docid, alertmsg) {
    const postData: HistoryDocument = {
      doc_id: docid,
      document_name: this.old_document.document_name,
      document: this.old_document.document,
      create_date: new Date(),
      updated_date: new Date(),
    }
    this.service.createHistoryDocumnet(postData).subscribe(res => {
      alert(alertmsg);
    });
  }

  backToList() {
    this.router.navigate(['/']);
  }

}
