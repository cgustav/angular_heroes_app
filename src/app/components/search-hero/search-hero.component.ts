//Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Services
import { HeroesService } from '../../services/heroes.service';

//Interfaces
import { Hero } from '../../interfaces/hero'


@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: []
})
export class SearchHeroComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe(criteria => {
      this.heroes = this._heroesService.searchHero(criteria.name);
    })
  }

  ngOnInit() {
    console.log(this.heroes);

  }

}
