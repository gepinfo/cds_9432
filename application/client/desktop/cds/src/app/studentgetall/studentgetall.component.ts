import { Component, OnInit } from '@angular/core';
import { StudentgetallService } from './studentgetall.service';

@Component({
  selector: 'app-studentgetall',
  templateUrl: './studentgetall.component.html',
  styleUrls: ['./studentgetall.component.scss'],
})

export class StudentgetallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Email', field: 'email'  },];
    public student = {
        name: '',
        email: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private studentgetallService: StudentgetallService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.studentgetallService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}