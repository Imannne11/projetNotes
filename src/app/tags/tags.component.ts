import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag.component'; 
import { Tag } from '../tag';
import { StorageService } from '../storage.service'; // Import du StorageService

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './tags.component.html',
})

export class TagsComponent {
  tags: Tag[] = []; // tab de tags
  editing: Tag | null = null; // null si pas en édition

  constructor(private storageService: StorageService) {
    this.tags = this.storageService.getTags(); // Charger les tags depuis localStorage au démarrage
  }

  // Méthode pour ajouter un tag
  dialogAddTag() {
    const name = window.prompt('Nom du tag ?');
    if (!name) return;

    const newTag: Tag = {
      id: Date.now(), // identifiant unique
      name: name,
      color: '#000000'
    };

    this.storageService.addTag(newTag); // Ajoute dans le localStorage
    this.tags = this.storageService.getTags(); // Recharge les tags
  }

  // Méthode pour supprimer un tag
  deleteTag(tag: Tag) {
    this.storageService.deleteTag(tag.id); // Supprime du localStorage
    this.tags = this.storageService.getTags(); // Recharge la liste après suppression
  }

  // Méthode pour débuter l'édition d'un tag
  startEditTag(tag: Tag) {
    this.editing = { ...tag }; // Créer une copie pour l'édition
  }

  // Méthode pour annuler l'édition
  cancelEdit() {
    this.editing = null;
  }

  // Méthode pour enregistrer un tag (création ou modification)
  saveTag() {
    if (!this.editing) return;

    if (this.editing.id === 0) {
      // Si l'ID est 0, on crée un nouveau tag
      const newTag = { ...this.editing, id: Date.now() };
      this.storageService.addTag(newTag);
    } else {
      // Sinon, on modifie un tag existant
      
    }
  }
}
