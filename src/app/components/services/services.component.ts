import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
// import {TranslateService} from "@ngx-translate/core";
// import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicesData: any

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    // this.api.getData().subscribe(res => {
    //   this.servicesData = res;
    //   this.servicesData = this.servicesData.data.serves;
    //   for (let re of this.servicesData) {
    //     this.servicesData[re]
    //   }
    //   console.log("ree 22");
    //   console.log("ree ", this.servicesData);
    // })
  }

  // getServices(lang: string) {
  //   this.translateServ.getTranslation(lang)
  //     .subscribe(res => {
  //       this.servicesData = res.services
  //       console.log("lang: ", this.servicesData)
  //     });
  // }
}
