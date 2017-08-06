import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  Http,
  HttpModule,
  XHRBackend,
  ResponseOptions,
  Response,
  RequestMethod,
  BaseRequestOptions,
  ResponseType
} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CustomListComponent } from './custom-list.component';

describe('CustomListComponent', () => {
  let component: CustomListComponent;
  let fixture: ComponentFixture<CustomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, FormsModule ],
      declarations: [ CustomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
