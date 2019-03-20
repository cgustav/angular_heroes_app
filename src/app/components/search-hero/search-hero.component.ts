//Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  searchParam: string;
  heroIndex: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe(criteria => {
      this.searchParam = criteria.name
      this.heroes = this._heroesService.searchHero(this.searchParam);
      this.heroIndex = this._heroesService.searchHeroIndex(criteria.name);
    })
  }

  ngOnInit() {

  }

}
