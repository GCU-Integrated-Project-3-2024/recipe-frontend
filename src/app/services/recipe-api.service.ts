import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class RecipeApiService {
  constructor() { }

  // Converts the JSON response object to a Recipe object
  private convertToRecipe(meal: any): Recipe {
    const ingredients: string[] = [];
    const instructions: string[] = [];

    // Loops through each ingredient and corresponding measure to create a single string.
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

    // Splits the instructions into an array of strings
    if (meal.strInstructions) {
      instructions.push(...meal.strInstructions.split('\r\n').filter((instruction: string) => instruction.trim() !== ''));
    }

    // Returns a Recipe object
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
  
  // Creates an array of recipes to store the response data.
  private handleResponse(response: any): Recipe[] {
    let recipes: Recipe[] = [];
    if (Array.isArray(response.data.meals)) {
      recipes = response.data.meals.map(this.convertToRecipe);
    }
    return recipes;
  }
  
  // Queries the API for recipes by name.
  async getRecipeByName(query: string){
    try {
      const response = await axios.get('https://themealdb.com/api/json/v2/9973533/search.php?s=' + query, {});
      return this.handleResponse(response);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }
  
  // Queries the API for recipes by ID.
  async getRecipeById(id: string) {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v2/9973533/lookup.php?i=' + id, {});
      return this.handleResponse(response);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  }

  // Queries the API for a random selection of 10 recipes.
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