import { Component } from '@angular/core';
import { MyNewComponent } from "../my-new-component/my-new-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: []
})
export class AppComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
