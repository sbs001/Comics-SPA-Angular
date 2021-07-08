import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero, HerosService } from 'src/app/services/heros.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heros:Hero[] = [];

  constructor(private _herosService: HerosService, private router:Router) {}

  ngOnInit(): void {
    this.heros = this._herosService.getHeros();
  }

  onClick(i:number){
    this.router.navigate(['/hero',i])
  }
}
