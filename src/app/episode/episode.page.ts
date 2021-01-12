import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {

  id = null;
  episode = {};
  loadReady = false;
  public episodes: Array<any>

  constructor(private service: ApiService,
    private router:Router,
    private Apiservice: ApiService,
    private activeRouter: ActivatedRoute) { }

    ngOnInit() {
      this.id = this.activeRouter.snapshot.paramMap.get("id")
       
    
        this.service.getepisode(this.id)
          .then(episode => {
            this.episode = episode;
            this.loadReady = true;
          })
  
        this.Apiservice.getepisode(this.id).then(result => {
        console.log(result)
        this.episode = result
      
        })  
    }

    goCharacter(id) {
      this.router.navigateByUrl(`character/${id}`)
    }
}
