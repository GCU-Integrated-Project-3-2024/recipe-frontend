import {Component} from '@angular/core';
import {FeaturedRecipeCardComponent} from '../featured-recipe-card/featured-recipe-card.component';

@Component({
  selector: 'app-recipe-bar',
  standalone: true,
  imports: [FeaturedRecipeCardComponent],
  templateUrl: './recipe-bar.component.html',
  styleUrl: './recipe-bar.component.scss'
})

export class RecipeBarComponent {
  featuredRecipes = [
    { id: 1, name: 'Recipe 1', imageUrl: '/assets/images/food/burger.jpeg', rating: 4.5 },
    { id: 2, name: 'Recipe 2', imageUrl: '/assets/images/food/fishchips.jpg', rating: 3.8 },
    { id: 3, name: 'Recipe 3', imageUrl: '/assets/images/food/chili.jpg', rating: 2.4 },
    { id: 4, name: 'Recipe 4', imageUrl: '/assets/images/food/omelette.jpg', rating: 1.2 },
    { id: 5, name: 'Recipe 5', imageUrl: '/assets/images/food/smoothie.jpg', rating: 0.5 },
  ];
}
