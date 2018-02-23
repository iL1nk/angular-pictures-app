import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorAppComponent } from './editor-app.component';

describe('EditorAppComponent', () => {
  let component: EditorAppComponent;
  let fixture: ComponentFixture<EditorAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
