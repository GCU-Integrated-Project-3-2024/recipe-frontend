import { Component, Input } from '@angular/core';
import {Recipe} from '../../../interfaces/recipe.interface';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list-view',
  standalone: true,
  imports: [StarRatingComponent, RouterModule],
  templateUrl: './recipe-list-view.component.html',
  styleUrl: './recipe-list-view.component.scss'
})

export class RecipeListViewComponent {
  @Input() recipes!: Recipe[];
}
