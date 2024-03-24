import { Component, Input } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe.interface';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ContentComponent } from '../../content/content.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [ContentComponent, HeaderComponent, StarRatingComponent],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})

export class RecipeDetailsComponent {

  @Input() recipe!: Recipe;

  
}


