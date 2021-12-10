import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktel',
  templateUrl: './cocktel.component.html',
  styleUrls: ['./cocktel.component.scss']
})
export class CocktelComponent implements OnInit {

  idCocktail: string;
  detailCocktail:any;

  constructor(
    private actRoute: ActivatedRoute,
    private _cocktail: CocktailService
  ) {
    const { id } = actRoute.snapshot.params;
    this.idCocktail = id;
  }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    this._cocktail.getDetailsCocktail(this.idCocktail).subscribe((res:any)=>{
      this.detailCocktail = res;
      console.log(this.detailCocktail);
      
    })
  }

}
