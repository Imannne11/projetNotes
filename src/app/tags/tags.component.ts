import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag.component'; // si c'est dans un dossier frère
import { Tag } from '../tag';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './tags.component.html',
})
export class TagsComponent {
  tags: Tag[] = [];

  dialogAddTag() {
    const name = window.prompt('Nom du tag ?');
    if (!name) return;

    const newTag: Tag = {
      id: Date.now(),
      name: name,
      color: '#000000'
    };
    this.tags.push(newTag);
    // appel au StorageService ici si tu l’as
  }

  deleteTag(tag: Tag) {
    this.tags = this.tags.filter(t => t.id !== tag.id);
  }


}
