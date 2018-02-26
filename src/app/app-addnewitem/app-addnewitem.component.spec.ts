import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddnewitemComponent } from './app-addnewitem.component';

describe('AppAddnewitemComponent', () => {
  let component: AppAddnewitemComponent;
  let fixture: ComponentFixture<AppAddnewitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAddnewitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddnewitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
