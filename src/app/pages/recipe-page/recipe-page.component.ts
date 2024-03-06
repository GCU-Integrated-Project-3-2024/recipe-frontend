import { Component } from '@angular/core';
import { RecipeDisplayComponent } from '../../components/recipe/recipe-display/recipe-display.component';

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [RecipeDisplayComponent],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss'
})
export class RecipePageComponent {

}
