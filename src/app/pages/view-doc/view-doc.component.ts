import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentServiceService } from 'src/app/document-service.service';
import { ManageDocument } from 'src/app/in-memory.service';

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.scss']
})
export class ViewDocComponent implements OnInit {

  model: ManageDocument;
  isHistoryDoc = false;
  constructor(
    private service: DocumentServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.model = new ManageDocument();
    const url: string = this.route.snapshot['_routerState'].url;
    this.isHistoryDoc = url.includes('dochistory');
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param['docid']) {
        this.model.id = param['docid'];
        if (this.isHistoryDoc) this.getHistoryDocumentById(param['docid']);
        else this.getDocumentById(param['docid']);
      }
    })
  }

  getDocumentById(doc_id: number) {
    this.service.getDocumentById(doc_id).subscribe(res => {
      this.model = res;
    })
  }

  getHistoryDocumentById(doc_id: number) {
    this.service.getHistoryDocumentById(doc_id).subscribe(res => {
      this.model = res;
    })
  }

  backToList() {
    this.router.navigate(['/']);
  }
}
