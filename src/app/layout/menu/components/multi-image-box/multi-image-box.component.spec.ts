import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiImageBoxComponent } from './multi-image-box.component';

describe('MultiImageBoxComponent', () => {
  let component: MultiImageBoxComponent;
  let fixture: ComponentFixture<MultiImageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiImageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
