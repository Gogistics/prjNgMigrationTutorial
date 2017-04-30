import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingComponent } from './sibling.component';

describe('SiblingComponent', () => {
  let component: SiblingComponent;
  let fixture: ComponentFixture<SiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
