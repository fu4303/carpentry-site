import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public current_year: number;

  constructor() { }

  ngOnInit() {
    this.current_year = (new Date()).getFullYear();
  }

  topFunction() {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': document.body.scrollTop
    });
  }

}
