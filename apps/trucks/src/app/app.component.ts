import { Component } from '@angular/core';
import { trucks } from '@sky-devs/trucks-feature';

@Component({
  selector: 'sky-devs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trucks';
  truckList = trucks();
}
