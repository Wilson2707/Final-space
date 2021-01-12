import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  public locations: Array<any>

  constructor(private service: ApiService,
    private router:Router) { }

  ngOnInit() {
    
    this.service.getlocations().then((response) => {
      this.locations = response;
      console.log(this.locations);

    }); 
  }

  golocation(id) {
    this.router.navigateByUrl(`location/${id}`)
  }

}
