import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from '../interfaces/recipe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendRecipeService {

  constructor(private http: HttpClient) { }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    console.log('Recipe:', recipe);
    return this.http.post<any>('http://localhost:5120/recipes', recipe)
      .pipe(
        catchError(error => {
          console.error('Error adding recipe:', error);
          throw(error);
        })
      );
  };

  getAllRecipes(): Observable<Recipe[]> {
    const url = `http://localhost:5120/recipes/`;
    return this.http.get<any>(url)
      .pipe(
        map(response => {
          if (!response.isSuccessful) {
            throw new Error('Failed to get recipes');
          }
          return response.result as Recipe[];
        }),
        catchError(error => {
          console.error('Error getting recipe:', error);
          throw(error);
        })
      );
  };

  getRecipeById(id: string): Observable<Recipe> {
    const url = `http://localhost:5120/recipes/${id}`;
    return this.http.get<any>(url)
      .pipe(
        map(response => {
          if (!response.isSuccessful) {
            throw new Error('Failed to get recipe');
          }
          console.log("hi" + response.result);
          return response.result as Recipe;
        }),
        catchError(error => {
          console.error('Error getting recipe:', error);
          throw(error);
        })
      );
  };
}