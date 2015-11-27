import {Page, NavController, NavParams} from 'ionic/ionic';
import {DataService} from '../data-service/data-service.js';

@Page({
  templateUrl: 'app/details/details.html',
  providers: [DataService]
})

export class DetailsPage {
  constructor(nav: NavController, navParams: NavParams, dataService: DataService) {
    this.nav = nav;
    this.pokemon = {};
    this.sprite = 'app/images/loading.gif';
    this.selected = navParams.get('selected');

    dataService.getPokemon(this.selected.resource_uri)
        .then((response) => {
            this.pokemon = response;
            dataService.getSprite(this.pokemon)
                .then((response) => {
                    this.sprite = response;
                });
        });
  }

  getIcon(method) {
      switch(method) {
          case 'level_up':
            return 'ribbon';
          case 'stone':
            return 'planet'
          default:
            return 'school';
      }
  }
}
