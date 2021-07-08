import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, HerosService } from 'src/app/services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {

  hero:any ={}

  constructor(private _heroService:HerosService,
              private _activateRouter:ActivatedRoute) {

    this._activateRouter.params.subscribe( param => this.hero = this._heroService.getHeroById(Number(param.id)));
   }

  ngOnInit(): void {
  
  }

}
