import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllDocsComponent } from './pages/all-docs/all-docs.component';
import { CreateEditDocComponent } from './pages/create-edit-doc/create-edit-doc.component';
import { HistoryEditedDocsComponent } from './pages/history-edited-docs/history-edited-docs.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DocumentServiceService } from './document-service.service';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoute } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryService } from './in-memory.service';
import { ViewDocComponent } from './pages/view-doc/view-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDocsComponent,
    CreateEditDocComponent,
    HistoryEditedDocsComponent,
    PageNotFoundComponent,
    ViewDocComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute, { scrollPositionRestoration: 'enabled' }),
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryService)
  ],
  providers: [DocumentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
