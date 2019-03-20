import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  //NOTA: siempre se ejecuta primero el constructor
  // que el ngOnInit

  heroes: Hero[] = [];

  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

    //console.log(this.heroes)
  }

  // verHeroe(index: number) {
  //   this._router.navigate(['heroe', index])
  // }

  displayHero(index: number) {
    this._router.navigate(['heroe', index])
  }

}
