import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//Interfaces
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  //@Output() selectedHeroe: EventEmitter<number>

  constructor(
    private _router: Router
  ) {

    //this.selectedHeroe = new EventEmitter();
    //console.log(this.hero)
  }

  ngOnInit() {
  }

  displayHero() {
    this._router.navigate(['heroe', this.index])
    //console.log(this.index)
    //this.selectedHeroe.emit(this.index)
  }

}
