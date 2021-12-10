import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  API_URL = environment.API_KEY;

  constructor(
    private http: HttpClient
  ) { }

  getCocktails() {
    const url = 'search.php?s='
    return this.http.get(this.API_URL + url)
      .pipe(
        map((res: any) => res.drinks)
      )
  }

  getDetailsCocktail(id:string){
    const url = `lookup.php?i=${id}`
    return this.http.get(this.API_URL + url)
      .pipe(
        map((res: any) => res.drinks[0])
      )
  }

}
