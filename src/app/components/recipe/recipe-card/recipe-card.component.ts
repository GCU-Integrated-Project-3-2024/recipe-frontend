import {Component, Input} from '@angular/core';
import {Recipe} from '../../../interfaces/recipe.interface';
import {StarRatingComponent} from '../star-rating/star-rating.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})

export class RecipeCardComponent {
  @Input() recipe!: Recipe;
}
