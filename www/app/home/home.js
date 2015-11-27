import {Page, NavController} from 'ionic/ionic';
import {DetailsPage} from '../details/details.js';
import {DataService} from '../data-service/data-service.js';
import {FirstupperPipe} from '../firstupper-pipe/firstupper-pipe.js';

@Page({
  templateUrl: 'app/home/home.html',
  providers: [DataService],
  pipes: [FirstupperPipe]
})

export class HomePage {
  constructor(data: DataService, nav: NavController) {
      this.pokedex = null;
      this.query = '';
      this.nav = nav;

      data.getPokedex()
        .then((response) => {
            this.pokedex = response;
        });
  }

  filterPokemons() {
      var query = this.query;
      if(!this.pokedex) {
          return [];
      }
      if(query.trim() == '') {
          return this.pokedex.pokemon;
      }
      return this.pokedex.pokemon.filter((item) => {
          if(item.name.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
              return true;
          } else {
              return false;
          }
      });
  }

  pokeSelected(event, pokemon) {
      this.nav.push(DetailsPage, {
         selected: pokemon
      });
  }
}
