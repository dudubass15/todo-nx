import { Component } from '@angular/core';
import { PrimaryButton, TextInput } from '@itau/ui';

@Component({
  selector: 'app-home',
  imports: [
    PrimaryButton,
    TextInput
  ],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  public enabled = true;

  public onNewClick(): void {
    console.log('New button clicked');
  }
}
