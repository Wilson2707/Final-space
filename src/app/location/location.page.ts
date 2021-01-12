import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  id = null;
  location = {};
  loadReady = false;
  public locations: Array<any>

  constructor(private service: ApiService,
    private router:Router,
    private Apiservice: ApiService,
    private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    
    this.id = this.activeRouter.snapshot.paramMap.get("id")
     
  
      this.service.getlocation(this.id)
        .then(location => {
          this.location = location;
          this.loadReady = true;
        })

      this.Apiservice.getlocation(this.id).then(result => {
      console.log(result)
      this.location = result
      })  
  }

  goCharacter(id) {
    this.router.navigateByUrl(`character/${id}`)
  }

}
