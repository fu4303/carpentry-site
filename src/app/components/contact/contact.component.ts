import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public name = '';
  public emailAddress = '';
  public message = '';

  constructor() {
  }

  ngOnInit() {
  }

  sendEmail() {
    window.location.href = 'mailto:info@williamscarpentry.co.uk?subject=Contact%20Form&body=' +
      this.name + ', ' + this.emailAddress + ', ' + this.message;
  }


}
