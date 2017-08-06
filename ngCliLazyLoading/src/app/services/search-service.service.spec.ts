import { TestBed, inject } from '@angular/core/testing';
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
import { SearchServiceService } from './search-service.service';

describe('SearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ SearchServiceService ]
    });
  });

  it('should ...', inject([SearchServiceService], (service: SearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
