import { Component, OnInit } from '@angular/core';
import { StudentcreateService } from './studentcreate.service';

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.scss'],
})

export class StudentcreateComponent implements OnInit {
    public student = {
        name: '',
        email: '',
    }

    constructor (
        private studentcreateService: StudentcreateService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.studentcreateService.GpCreate(this.student).subscribe(data => {
            this.student.name = ''
 	 	this.student.email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}