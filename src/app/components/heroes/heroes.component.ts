import { Component, OnInit } from '@angular/core';
import { Hero, HerosService } from 'src/app/services/heros.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heros:Hero[] = [];

  constructor(private _herosService: HerosService) {}

  ngOnInit(): void {
    this.heros = this._herosService.getHeros();
  }

}
