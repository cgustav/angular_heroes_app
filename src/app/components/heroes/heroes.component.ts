import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  //NOTA: siempre se ejecuta primero el constructor
  // que el ngOnInit

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes)
  }

}
