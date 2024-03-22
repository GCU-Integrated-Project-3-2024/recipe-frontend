import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class RecipeApiService {
  constructor() { }

  async getRecipeByName(query: string) {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/search.php?s=' + query, {});

      let recipes: Recipe[] = [];

      if (Array.isArray(response.data.meals)) {
        recipes = response.data.meals.map((meal: any) => {
          return {
            name: meal.strMeal,
            imageUrl: meal.strMealThumb,
          };
        });
      }

      return recipes;

    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }
}