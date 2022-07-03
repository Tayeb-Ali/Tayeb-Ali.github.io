import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // this.loadScript();
  }

  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = './assets/vendor/purecounter/purecounter.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
