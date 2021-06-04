import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  footerMessage = 'Made by Camilo Villa';
  linkedInUrl = 'https://www.linkedin.com/in/cvillar4/';

  constructor() { }

  ngOnInit(): void {
  }

}
