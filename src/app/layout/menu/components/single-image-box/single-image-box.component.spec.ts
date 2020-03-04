import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImageBoxComponent } from './single-image-box.component';

describe('SingleImageBoxComponent', () => {
  let component: SingleImageBoxComponent;
  let fixture: ComponentFixture<SingleImageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleImageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
