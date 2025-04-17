import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router'; // ← AJOUTE RouterOutlet


@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule], //permet le clic sur les liens
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Imane';
}
