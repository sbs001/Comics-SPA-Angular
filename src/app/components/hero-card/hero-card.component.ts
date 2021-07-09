import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/services/heros.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {

  @Input() hero:any = {};
  @Input() index:number | undefined;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this._router.navigate(['/hero',this.index])
  }
}
