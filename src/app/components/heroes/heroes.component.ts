import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

    //console.log(this.heroes)
  }

  verHeroe(index: number) {
    this._router.navigate(['heroe', index])
  }

}
