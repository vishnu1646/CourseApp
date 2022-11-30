import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  courseVenue=""

  constructor(private api:ApiService){}

  readValues =()=>
  {
    let course:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}

    console.log(course)

    this.api.addcourse(course).subscribe(
      (response:any)=>{console.log(response)
      if(response.status=="success"){
        alert("Course added successfully")
        this.courseTitle=""
        this.courseDate=""
        this.courseDuration=""
        this.courseVenue=""
        this.courseDescription=""
      }
      else{
        alert("Something went wrong")
      }
      }
    )

  }


}
