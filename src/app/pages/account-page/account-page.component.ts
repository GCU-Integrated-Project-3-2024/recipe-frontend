import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AccountDetailsComponent } from '../../components/account-details/account-details.component';
import { ContentComponent } from '../../components/content/content.component';
@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [HeaderComponent, AccountDetailsComponent, ContentComponent],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss'
})

export class AccountPageComponent {

}
