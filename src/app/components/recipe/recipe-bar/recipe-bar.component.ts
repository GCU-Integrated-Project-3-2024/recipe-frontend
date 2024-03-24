import {Component, Input} from '@angular/core';
import {RecipeCardComponent} from '../recipe-card/recipe-card.component';
import {Recipe} from '../../../interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-bar',
  standalone: true,
  imports: [RecipeCardComponent],
  templateUrl: './recipe-bar.component.html',
  styleUrl: './recipe-bar.component.scss'
})

export class RecipeBarComponent {
  @Input() recipes!: Recipe[];
}
