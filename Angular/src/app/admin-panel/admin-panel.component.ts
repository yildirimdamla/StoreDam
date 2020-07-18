import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/services/table.service';
import { HttpClient } from '@angular/common/http';
import {
  table_schema,
  columnlist,
  tableoperations,
} from 'src/data/table-example';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  data: table_schema[];
  columnlist = columnlist;
  sortbycolumn(item) {
    tableoperations.sortbyString(item, this.data);
  }
  constructor(private _tableservice: TableService, private http: HttpClient) {}
  public productsArray: table_schema[];

  ngOnInit(): void {
    this._tableservice.getData().subscribe((res) => {
      this.data = res;
    });
  }
}
