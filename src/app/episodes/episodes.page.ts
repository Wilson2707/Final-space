import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  public episodes: Array<any>

  constructor(private service: ApiService,
    private router:Router) { }

  ngOnInit() {
    this.service.getepisodes().then((response) => {
      this.episodes = response;
      console.log(this.episodes);

    }); 
  }

  goepisode(id) {
    this.router.navigateByUrl(`episode/${id}`)
  }

}
