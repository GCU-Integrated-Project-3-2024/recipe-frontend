import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RecipeApiService } from   '../../services/recipe-api.service';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipeCardComponent } from '../../components/recipe/recipe-card/recipe-card.component';

@Component({
  selector: 'app-discover-page',
  standalone: true,
  imports: [HeaderComponent, RecipeCardComponent],
  templateUrl: './discover-page.component.html',
  styleUrl: './discover-page.component.scss'
})

export class DiscoverPageComponent {

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
      console.log(this.recipes);
    } catch (error) {
      console.error(error);
    }
  }

  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.lastQuery = query;
    if (this.canSearch) {
      this.canSearch = false;
      setTimeout(() => {
        this.canSearch = true;
        this.getRecipes(this.lastQuery);
      }, 1000);
    } else {
      console.log('Cannot search yet');
    }
  }
}
