import { Component, Input } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe.interface';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-grid-view',
  standalone: true,
  imports: [RecipeCardComponent],
  templateUrl: './recipe-grid-view.component.html',
  styleUrl: './recipe-grid-view.component.scss'
})

export class RecipeGridViewComponent {
  @Input() recipes!: Recipe[];
}
