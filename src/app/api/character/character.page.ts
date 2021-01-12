import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  id = null;
  character = null;
  public characters: Array<any>

  constructor(
    private activeRouter: ActivatedRoute,
    private ApiServices:ApiService, 
    private services: ApiService
    ) { }

    ngOnInit() {
      
      this.id = this.activeRouter.snapshot.paramMap.get("id")
     
  
      this.services.getCharacter(this.id)
        .then(character => {
          this.character = character;
        })

      this.ApiServices.getCharacter(this.id).then(result => {
      console.log(result)
      this.characters = result.results
      })  

    }

}
