import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class AddRecipeService {

  constructor(private http: HttpClient) { }

  addRecipe(recipe: any): Observable<any> {
    console.log('Recipe:', recipe);
    return this.http.post<any>('http://localhost:5120/recipes', recipe)
      .pipe(
        catchError(error => {
          console.error('Error adding recipe:', error);
          throw(error);
        })
      );
  }
}