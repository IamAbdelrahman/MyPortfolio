import { Component } from '@angular/core';
import { Home } from './pages/home/home';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// This App class acts as the root component of the Angular application.
// It is decorated with @Component to define its metadata, including the selector
export class App {
  protected title = 'Demo';
}
