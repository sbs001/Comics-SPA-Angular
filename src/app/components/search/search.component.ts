import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, HerosService } from 'src/app/services/heros.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  heros:Hero[] = [];
  input:string = '';

  constructor(
    private _herosService:HerosService, 
    private _activedRouter:ActivatedRoute) {

      this._activedRouter.params.subscribe( param => {
        this.input = param.input;
        this.heros = [...this._herosService.searchHeros(param.input)]
      })
   }

  ngOnInit(): void {
  }

}
