import { Injectable, Input } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class RecipeApiService {

  constructor() { }

  getRecipes(query: string) {
    return axios.get('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe', {
      params: {
        'query': query
      },
      headers: {
        'X-RapidAPI-Key': '570b9f878amsh7373e8ca4d3b615p1fef3fjsn99247c2f882f',
        'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
      }
  });
}
}
