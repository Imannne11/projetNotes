import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';   // pour routerLink
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags/tags.component'; // adapte le chemin si besoin


@Component({
  selector: 'app-root',
  imports: [RouterLink,CommonModule,TagsComponent], //permet le clic sur les liens
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Imane';
}
