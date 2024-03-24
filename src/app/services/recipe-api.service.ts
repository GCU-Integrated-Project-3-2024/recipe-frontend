import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class RecipeApiService {
  constructor() { }

  private convertToRecipe(meal: any): Recipe {
    const ingredients: string[] = [];
    const instructions: string[] = [];

    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;

        if (meal[ingredientKey] && meal[ingredientKey].trim() !== '') {
            const ingredient = `${meal[measureKey]} ${meal[ingredientKey]}`;
            ingredients.push(ingredient);
        } else {
            break;
        } 
    }

    if (meal.strInstructions) {
      instructions.push(...meal.strInstructions.split('\r\n').filter((instruction: string) => instruction.trim() !== ''));
    }

    return {
        id: meal.idMeal,
        name: meal.strMeal,
        instructions: instructions,
        ingredients: ingredients,
        youtubeUrl: meal.strYoutube,
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
      const response = await axios.get('https://themealdb.com/api/json/v2/9973533/search.php?s=' + query, {});
      return this.handleResponse(response);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }
  
  async getRecipeById(id: string) {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v2/9973533/lookup.php?i=' + id, {});
      return this.handleResponse(response);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  }

  async getRandomRecipes() {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v2/9973533/randomselection.php', {});
      return this.handleResponse(response);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  }
}