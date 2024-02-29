import { Component, Input } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe.interface';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-featured-recipe-card',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './featured-recipe-card.component.html',
  styleUrl: './featured-recipe-card.component.scss'
})

export class FeaturedRecipeCardComponent {
  @Input() recipe!: Recipe;
}
