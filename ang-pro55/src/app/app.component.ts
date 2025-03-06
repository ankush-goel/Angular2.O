import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNewComponent } from "./my-new-component/my-new-component.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyNewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hey-hello';
  description = 'To demonstrate components and data binding.';
  isDisabled: boolean = true;
  items = ['Apple', 'Banana', 'Cherry'];
  isLoggedIn = true;
  buttonText: string = 'Submit';
Math: any;
  handleClick() {
    alert('Button clicked!');
  }
  isVisible = false;
  isSpecial = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
  currentPage = 1;
  itemsPerPage = 5;
  data = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
  ];

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.data.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}