import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchServiceService {
  apiRoot:string = 'https://itunes.apple.com/search';
  results:Object[];
  loading:boolean;

  constructor(private http:Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {}
}