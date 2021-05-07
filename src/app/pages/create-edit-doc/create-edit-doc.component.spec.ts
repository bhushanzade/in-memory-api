import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditDocComponent } from './create-edit-doc.component';

describe('CreateEditDocComponent', () => {
  let component: CreateEditDocComponent;
  let fixture: ComponentFixture<CreateEditDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
