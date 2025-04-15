import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true, //OBLIGATOIRE pour utiliser `input()` dans Angular 17+
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  
  id = input<number>(0);  // Signal d'entrée pour l'ID
  name = input<string>('');  // Signal d'entrée pour le nom
  color = input<string>('#000000');  // Signal d'entrée pour la couleur

  constructor() {}
  

}
