import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNewComponent } from "./my-new-component/my-new-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyNewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}