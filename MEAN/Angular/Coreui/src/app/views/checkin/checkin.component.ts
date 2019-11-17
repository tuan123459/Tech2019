import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import {Router} from '@angular/router';
import { StudentService } from '../../services/student.service';
import {  ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  Students:[Student]; 
  student: Student={_id:"0"} as Student;
  constructor(private studentservice:StudentService,
    private router: Router 
    ) { }

  ngOnInit() { this.loaddata();
  }
  loaddata()
  {
    this.studentservice.list().subscribe(res=>
      {
        this.Students=res;
      })
  }
  save() {
    this.studentservice.save(this.student).subscribe( res => {
      console.log(res); 
      this.loaddata();
    });
  
  
  }
  
  
  
hideModal() {
  // this.router.navigate(['/customer-type', 0]);

 this. student={_id:"0"} as Student;
}
}
