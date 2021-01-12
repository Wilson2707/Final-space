import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor() { }

  getCharacters=() => 
    fetch(`https://finalspaceapi.com/api/v0/character`).then((response) => 
      response.json()
    );
  
  getCharacter = (id) =>
    fetch (`https://finalspaceapi.com/api/v0/character/${id}`).then((response) =>
      response.json()
    );

    getlocations = () =>
    fetch (`https://finalspaceapi.com/api/v0/location`).then((response) =>
      response.json()
    );

    getlocation = async (id) => {
      let response: Response = await 
      fetch (`https://finalspaceapi.com/api/v0/location/${id}`);
        let location = await response.json();

        let fetchs: Array<Response> = location.notable_residents.map((url) => fetch(url));
        
        let responses = await Promise.all(fetchs);

        let responsesToJson = responses.map((response) => response.json());

        location.residents = await  Promise.all(responsesToJson);

        return location;
  };

    getepisodes = () =>
    fetch (`https://finalspaceapi.com/api/v0/episode`).then((response) =>
      response.json()
    );

    getepisode = async (id) => {
      let response: Response = await    
    fetch (`https://finalspaceapi.com/api/v0/episode/${id}`);

    let episode = await response.json();

    let fetchs: Array<Response> = episode.characters.map((character) => fetch(character));
        
        let responses = await Promise.all(fetchs);

        let responsesToJson = responses.map((response) => response.json());

        episode.characters = await  Promise.all(responsesToJson);

    return episode;
  };

  getCita = () =>
  fetch(`https://finalspaceapi.com/api/v0/quote`).then((response) =>
    response.json()
  );
  geteCita = async (id) => {
    let response: Response = await    
  fetch (`https://finalspaceapi.com/api/v0/episode/${id}`);

  let episode = await response.json();

  let fetchs: Array<Response> = episode.characters.map((character) => fetch(character));
      
      let responses = await Promise.all(fetchs);

      let responsesToJson = responses.map((response) => response.json());

      episode.characters = await  Promise.all(responsesToJson);

  return episode;

  
}
}

