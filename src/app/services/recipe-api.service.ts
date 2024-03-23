import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class RecipeApiService {
  constructor() { }

  private convertToRecipe(meal: any): Recipe {
    return {
      id: meal.idMeal,
      name: meal.strMeal,
      imageUrl: meal.strMealThumb,
      rating: 0,
    };
  }
  
  private handleResponse(response: any): Recipe[] {
    let recipes: Recipe[] = [];
    if (Array.isArray(response.data.meals)) {
      recipes = response.data.meals.map(this.convertToRecipe);
    }
    return recipes;
  }
  
  async getRecipeByName(query: string){
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/search.php?s=' + query, {});
      return this.handleResponse(response);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }
  
  async getRecipeById(id: string) {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/lookup.php?i=' + id, {});
      return this.handleResponse(response);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  }
}