import { Component, OnInit } from '@angular/core';
import { Utils } from '@core/utils/utils';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  searchs: any[] = [];
  columnDefs = [
    { field: 'id', headerName: '#', flex: 1 },
    { field: 'name', headerName: 'Pesquisa', tooltipField: 'name', flex: 3 },
  ];

  constructor() { }

  ngOnInit(): void {
    this.searchs = Utils.getSession('searchWord')
      .filter((value, index) => index < 5)
      .map((value, index) => ({
        id: ++index,
        name: value
      }));
  }

}
