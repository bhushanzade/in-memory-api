import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryEditedDocsComponent } from './history-edited-docs.component';

describe('HistoryEditedDocsComponent', () => {
  let component: HistoryEditedDocsComponent;
  let fixture: ComponentFixture<HistoryEditedDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryEditedDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryEditedDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
