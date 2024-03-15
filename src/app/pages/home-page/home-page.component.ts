import { Component, ViewChild } from '@angular/core';
import { RecipeBarComponent } from '../../components/recipe/recipe-bar/recipe-bar.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { LoginCardComponent } from '../../components/login-card/login-card.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecipeBarComponent, ModalComponent, LoginCardComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
  
}
