import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RecipeApiService } from   '../../services/recipe-api.service';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
  selector: 'app-discover-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './discover-page.component.html',
  styleUrl: './discover-page.component.scss'
})

export class DiscoverPageComponent {

  constructor(private recipeApiService : RecipeApiService) {}

  ngOnInit() {
    this.getRecipes();
  }

  recipes!: string[];

  getRecipes() {
    this.recipeApiService.getRecipes('soup')
      .then(response => {
        this.recipes = response.data.recipe;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
