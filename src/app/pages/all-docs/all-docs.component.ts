import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentServiceService } from 'src/app/document-service.service';

@Component({
  selector: 'app-all-docs',
  templateUrl: './all-docs.component.html',
  styleUrls: ['./all-docs.component.scss']
})
export class AllDocsComponent implements OnInit {

  alldocs: any[] = [];

  constructor(
    private service: DocumentServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllDocments();
  }

  getAllDocments() {
    this.service.getAllDocuments().subscribe(res => {
      this.alldocs = res;
    })
  }

  viewDocument(id) {
    this.router.navigate(['doc', id]);
  }

  editDocument(id) {
    this.router.navigate(['editdoc', id]);
  }

  goToCreate() {
    this.router.navigate(['createdoc']);
  }

  deleteDocument(id) {
    if(confirm('Do you want to delete this document')){
      this.service.deleteDocument(id).subscribe(
        res => {
          this.getAllDocments();
        }
      );
    }
  }
}
