import { Component } from '@angular/core';
import { RecipeDisplayComponent } from '../../components/recipe/recipe-display/recipe-display.component';
import { BackendRecipeService } from '../../services/backend-recipe.service';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
  selector: 'app-recipebook-page',
  standalone: true,
  imports: [RecipeDisplayComponent],
  templateUrl: './recipebook-page.component.html',
  styleUrl: './recipebook-page.component.scss'
})
export class RecipebookPageComponent {

  constructor(private backendRecipeService : BackendRecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  recipes: Recipe[] = [];
  canSearch: boolean = true;
  lastQuery: string = '';

  getRecipes() {
    this.backendRecipeService.getAllRecipes()
      .subscribe({
        next: (recipes: Recipe[]) => {
          this.recipes = recipes;
        },
        error: (error) => {
          console.error('Error getting recipes:', error);
        }
      });
  }
}
