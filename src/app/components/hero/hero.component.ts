import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() {
    const options = {
      strings: ['Innovation.', 'Discovery.'],
      stringsElement: '#typed',
      // strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true,

    };

    // const typed = new Typed('typed', options);

  }

  ngOnInit(): void {
  }

}
