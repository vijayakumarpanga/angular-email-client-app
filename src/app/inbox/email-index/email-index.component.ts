import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {
  emailList =[];
  constructor(private emailService : EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmail().subscribe(data=>{
      console.log(data);
      this.emailList=data
    })
 
  }

}
