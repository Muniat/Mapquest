import { Component, OnInit } from '@angular/core';

import { MapquestService } from '../mapquest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  data: any;
  from: string = "Boston, MA";
  to: string = "Cambridge, MA";

  constructor(private mapquestService: MapquestService) {}

  getDir(){
    this.mapquestService.getDirections(this.from, this.to)
    .subscribe(result => {
      console.log(result);
      this.data = result.route;
    })
  }
  
  ngOnInit(): void {
    this.mapquestService.getDirections(this.from, this.to)
    .subscribe(result => {
      console.log(result);
      this.data = result.route;
    })
  }

}
