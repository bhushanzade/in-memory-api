import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentServiceService } from 'src/app/document-service.service';

@Component({
  selector: 'app-history-edited-docs',
  templateUrl: './history-edited-docs.component.html',
  styleUrls: ['./history-edited-docs.component.scss']
})
export class HistoryEditedDocsComponent implements OnInit, OnChanges {

  @Input() doc_id: string;
  alldocs: any[] = [];

  constructor(
    private service: DocumentServiceService,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.doc_id) {
      this.getAllDocments();
    }
  }

  ngOnInit(): void { }

  getAllDocments() {
    this.service.getAllHistoryDocuments(this.doc_id).subscribe(res => {
      this.alldocs = res;
    })
  }

  viewDocument(id) {
    this.router.navigate(['dochistory', id]);
  }

  editDocument(id) {
    this.router.navigate(['editdoc', id]);
  }

}
