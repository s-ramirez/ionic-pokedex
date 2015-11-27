import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class DataService {
  constructor(http: Http) {
    this.http = http;
    this.apiUrl = 'http://pokeapi.co/';
  }

  getResource(url) {
    return window.fetch(this.apiUrl + url)
        .then(response => response.json())
        .then((data) => {
            return data;
        });
  }

  getPokedex() {
      return this.getResource('api/v1/pokedex/1/');
  }

  getPokemon(url) {
      return this.getResource(url);
  }

  getSprite(pokemon) {
      var url = pokemon.sprites[0].resource_uri;
      return this.getResource(url)
        .then((sprite) => {
            return this.apiUrl+sprite.image;
        });
  }
}
