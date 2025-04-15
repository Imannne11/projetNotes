import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag.component'; 
import { Tag } from '../tag';


@Component({
  selector: 'app-tags',
  imports: [CommonModule, TagComponent],
  templateUrl: './tags.component.html',
})

export class TagsComponent {
  tags: Tag[] = [];//tab de tags
  editing: Tag | null = null; //0 si ajout
  // Ajout de la propriété `editing`

  // Méthode pour ajouter un tag
  dialogAddTag() {
    const name = window.prompt('Nom du tag ?');
    if (!name) return;

    const newTag: Tag = {
      id: Date.now(),
      name: name,
      color: '#000000'
    };
    this.tags.push(newTag);//ajoute le nouveau tag au tab
  }

  // Méthode pour supprimer un tag
  deleteTag(tag: Tag) {
    this.tags = this.tags.filter(t => t.id !== tag.id);
    //cree un nouveau tableau contenant avec les tags qui nont pas le meme id
  }

  // Méthode pour débuter l'édition d'un tag
  startEditTag(tag: Tag) {
    this.editing = { ...tag };  // Créer une copie pour l'édition
  }

  // Méthode pour annuler l'édition
  cancelEdit() {
    this.editing = null;
  }

  // Méthode pour enregistrer un tag (création ou modification)
  saveTag() {
    if (this.editing?.id === 0) {
      // Si l'ID est 0, on crée un nouveau tag
      this.tags.push({ ...this.editing, id: Date.now() });
    } else {
      // Sinon, on modifie un tag existant
    }
    this.cancelEdit();
  }  
}
