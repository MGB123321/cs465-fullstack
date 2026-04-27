import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Travlr Getaways Admin');
}
