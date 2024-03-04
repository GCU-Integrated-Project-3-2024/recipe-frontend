import {Component} from '@angular/core';
import {RecipeBarComponent} from '../../components/featured-recipe/recipe-bar/recipe-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecipeBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
