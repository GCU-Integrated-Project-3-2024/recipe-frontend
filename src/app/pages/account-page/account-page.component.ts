import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss'
})

export class AccountPageComponent {

}
