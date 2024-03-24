import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeApiService } from '../../services/recipe-api.service';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipeDetailsComponent } from '../../components/recipe/recipe-details/recipe-details.component';

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [RecipeDetailsComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss'
})
export class RecipePageComponent {

  constructor(private route: ActivatedRoute, private recipeApiService : RecipeApiService) {}

  recipes: Recipe[] | null = null;
  id: string = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.getRecipe(this.id);
      }
    });
  }

  async getRecipe(query: string) {
    try {
      this.recipes = await this.recipeApiService.getRecipeById(query);
    } catch (error) {
      console.error(error);
    }
  }
}
