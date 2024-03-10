import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})

export class ModalComponent {

  @Input() title: string = '';
  isOpen = false;

  openModal() {
      this.isOpen = true;
  }

  closeModal() {
      this.isOpen = false;
  }

}
