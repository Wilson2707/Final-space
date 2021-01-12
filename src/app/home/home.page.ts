import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from "@angular/router";
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public characters: Array<any>

  constructor(
    private ApiServices: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ApiServices.getCharacters().then(result => {
      console.log(result)
      this.characters = result
    })
  }

  goCharacter(id) {
    this.router.navigateByUrl(`character/${id}`)
  }


}

