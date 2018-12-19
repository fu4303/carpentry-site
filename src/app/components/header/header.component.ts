import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  facebookShare() {
    window.open(
      'https://www.facebook.com/sharer.php?u=https://www.williamscarpentry.co.uk',
      '_blank'
    );
  }

  twitterShare() {
    window.open(
      'https://twitter.com/home?status=10%2B%20years%20of%20experience%20in%20carpentry%20and%20building,%20with%20a%20' +
                  'wealth%20of%20knowledge%20shared%20with%20the%20other%20contractors%20we%20use.%20Helping%20our%20customers%20co' +
                  'mplete%20their%20jobs%20to%20a%20high%20standard%20and%20within%20their%20time%20constraints.',
      '_blank'
    );
  }

  linkedinShare() {
    window.open(
      'https://www.linkedin.com/shareArticle?mini=true&url=' +
                            'https%3A//www.williamscarpentry.co.uk&title=Williams%20Carpentry&summary=&source=',
      '_blank'
    );
  }

  pinterestShare() {
    window.open(
      'https://pinterest.com/pin/create/button/?url=https%3A//williamscarpentry.co.uk/' +
                            '&media=https%3A//williamscarpentry.co.uk/assets/img/gallery/portfolio/preview_s/IMG_2412.jpg&description=',
      '_blank'
    );
  }

}
