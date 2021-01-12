import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  public citas: Array<any>

  constructor(private service: ApiService,
    private router:Router) { }

    ngOnInit() {
      this.service.getCita().then(result => {
        console.log(result)
        this.citas = result
    })
  }

}
