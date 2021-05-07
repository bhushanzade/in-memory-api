import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllDocuments(): Observable<any> {
    const url = environment.base_url + 'documents';
    return this.httpClient.get(url);
  }

  getDocumentById(id): Observable<any> {
    const url = environment.base_url + 'documents/' + id;
    return this.httpClient.get(url);
  }

  getAllHistoryDocuments(id): Observable<any> {
    const url = environment.base_url + 'history_documents?doc_id=' + id;
    return this.httpClient.get(url);
  }

  getHistoryDocumentById(id): Observable<any> {
    const url = environment.base_url + 'history_documents/' + id;
    return this.httpClient.get(url);
  }

  createDocumnet(postdata): Observable<any> {
    const url = environment.base_url + 'documents';
    return this.httpClient.post(url, postdata);
  }

  updateDocument(postdata, id): Observable<any> {
    const url = environment.base_url + 'documents/' + id;
    return this.httpClient.put(url, postdata);
  }

  createHistoryDocumnet(postdata): Observable<any> {
    const url = environment.base_url + 'history_documents';
    return this.httpClient.post(url, postdata);
  }

  deleteDocument(id): Observable<any> {
    const url = environment.base_url + 'documents/' + id;
    return this.httpClient.delete(url);
  }
}

