import { Injectable } from '@angular/core';
import { table_schema } from 'src/data/table-example';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}

  public getData(): any {
    return this.http.get(`http://localhost:9060/table/list`);
  }
}
