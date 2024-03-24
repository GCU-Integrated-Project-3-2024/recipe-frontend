import { Component, ViewChild } from '@angular/core';
import { RecipeBarComponent } from '../../components/recipe/recipe-bar/recipe-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ContentComponent } from '../../components/content/content.component';
import { RecipeApiService } from '../../services/recipe-api.service';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecipeBarComponent, HeaderComponent, ContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
  
  constructor(private recipeApiService: RecipeApiService) { }

  recipes: Recipe[] = [];

  ngOnInit() {
    this.getRecipes();
  }

  async getRecipes() {
    try {
      const response = await this.recipeApiService.getRandomRecipes();
      this.recipes = response;
    } catch (error) {
      console.error(error);
    }
  }
}
