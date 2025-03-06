import { Component } from '@angular/core';

@Component({
  selector: 'app-my-new-component',      
  templateUrl: './my-new-component.component.html',  
  styleUrls: ['./my-new-component.component.css']   
})
export class MyNewComponent {
 
  greeting: string = 'Hello, Angular! My name is Pratham';

  
  changeGreeting(newGreeting: string): void {
    this.greeting = newGreeting;
  }
}
