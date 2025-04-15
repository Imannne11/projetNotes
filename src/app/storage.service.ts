import { Injectable } from '@angular/core';
import { Tag } from './tag';  // Import du type Tag

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly TAGS_KEY = 'tags';  // Clé pour stocker les tags dans le localStorage

  constructor() {}

  // Récupérer les tags depuis le localStorage
  getTags(): any[] {
    if (typeof window !== 'undefined' && window.localStorage)
      //Vérifie que localStorage est bien accessible dans le navigateur.
    {
      const tags = localStorage.getItem('tags');
      return tags ? JSON.parse(tags) : [];
    }
    return [];  // Retourne un tableau vide si localStorage n'est pas disponible
  }

  // Sauvegarder les tags dans le localStorage
  saveTags(tags: Tag[]): void {
    localStorage.setItem(this.TAGS_KEY, JSON.stringify(tags));  // Sauvegarde les tags sous forme de chaîne JSON
  }

  addTag(tag: Tag): void {
    const tags = this.getTags();
    tags.push(tag);
    this.saveTags(tags);
  }

  // Supprimer un tag
  deleteTag(tagId: number): void {
    const tags = this.getTags().filter(tag => tag.id !== tagId);
    this.saveTags(tags);
  }
}
