import {Component} from '@angular/core';
import { LoginCardComponent } from '../../components/login-card/login-card.component';
import { RegisterCardComponent } from '../../components/register-card/register-card.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginCardComponent, RegisterCardComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
