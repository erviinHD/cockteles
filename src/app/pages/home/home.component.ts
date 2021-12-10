import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cocktails: any;

  constructor(
    private _cacktail: CocktailService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails() {
    this._cacktail.getCocktails().subscribe((res: any) => {
      this.cocktails = res;
    })
  }

  goCocktail(id: string) {
    this.router.navigate(['/cocktel', id])
  }


}
