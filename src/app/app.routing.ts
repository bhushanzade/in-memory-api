import { Routes } from '@angular/router';
import { AllDocsComponent } from './pages/all-docs/all-docs.component';
import { CreateEditDocComponent } from './pages/create-edit-doc/create-edit-doc.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ViewDocComponent } from './pages/view-doc/view-doc.component';

export const AppRoute: Routes = [
  {
    path: '',
    component: AllDocsComponent,
  },
  {
    path: 'doc/:docid',
    component: ViewDocComponent,
  },
  {
    path: 'createdoc',
    component: CreateEditDocComponent,
  },
  {
    path: 'editdoc/:docid',
    component: CreateEditDocComponent,
  },
  {
    path: 'dochistory/:docid',
    component: ViewDocComponent,
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];
