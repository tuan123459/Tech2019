import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import {Router} from '@angular/router';
import { StudentService } from '../../services/student.service';
import {  ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
    Students:[Student]; 
    student: Student={_id:"0"} as Student;
  constructor(
private studentservice:StudentService,
private router: Router 

  ) { }

  ngOnInit() {
    this.loaddata();
  }
loaddata()
{
  this.studentservice.list().subscribe(res=>
    {
      this.Students=res;
    })
}
openAdd() {
  // this.router.navigate(['/customer-type', 0]);
  this.student = {_id: "0"} as Student;
  this.editModal.show();
}

openEdit(event, id) {
  event.preventDefault();
  this.studentservice.get(id).subscribe(res => {
    this.student = res;
    this.editModal.show();
  });
}

delete(event, id) {
  event.preventDefault();/*
  this.pNotifyService.confirm('Confirm', 'Are you sure?', yes => {
    if (yes) {
      this.customerTypeService.delete(id).subscribe( res => {
        if (res.errorCode === 0) {
          this.loadData();
        }
      });
    }
  });*/
  this.studentservice.delete(id).subscribe( res => {
   
      this.loaddata();
    
  });

}

hideModal() {
  // this.router.navigate(['/customer-type', 0]);
  this.editModal.hide();
}

save() {
  this.studentservice.save(this.student).subscribe( res => {
    console.log(res); 
    this.loaddata();
  });
  this.editModal.hide();

}
}
