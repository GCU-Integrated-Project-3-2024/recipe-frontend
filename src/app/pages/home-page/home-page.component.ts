import { Component, ViewChild } from '@angular/core';
import { RecipeBarComponent } from '../../components/recipe/recipe-bar/recipe-bar.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecipeBarComponent, ModalComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {

  @ViewChild(ModalComponent) modal!: ModalComponent;

  openModal() {
      this.modal.openModal();
  }

  closeModal() {
      this.modal.closeModal();
  }
  
}
