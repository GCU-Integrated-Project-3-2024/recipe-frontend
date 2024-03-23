import { Component } from '@angular/core';
import { RecipeDisplayComponent } from '../../components/recipe/recipe-display/recipe-display.component';
import { RecipeApiService } from '../../services/recipe-api.service';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
  selector: 'app-recipebook-page',
  standalone: true,
  imports: [RecipeDisplayComponent],
  templateUrl: './recipebook-page.component.html',
  styleUrl: './recipebook-page.component.scss'
})
export class RecipebookPageComponent {

  constructor(private recipeApiService : RecipeApiService) {}

  ngOnInit() {
    this.getRecipes('');
  }

  recipes: Recipe[] = [];
  canSearch: boolean = true;
  lastQuery: string = '';

  async getRecipes(query: string) {
    try {
      const response = await this.recipeApiService.getRecipeByName(query);
      this.recipes = response;
    } catch (error) {
      console.error(error);
    }
  }
  
}
