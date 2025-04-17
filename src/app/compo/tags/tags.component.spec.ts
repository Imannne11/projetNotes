import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagComponent } from '../tag/tag.component';
import { StorageService } from '../../storage.service';
import { Tag } from '../../tag';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, FormsModule, TagComponent],
  templateUrl: './tags.component.html',
})
export class TagsComponent {
  tags: Tag[] = [];
  editing: Tag | null = null;

  constructor(private storageService: StorageService) {
    this.tags = this.storageService.getTags();
  }

  startEditTag(tag: Tag) {
    this.editing = { ...tag };
  }

  cancelEdit() {
    this.editing = null;
  }

  saveTag() {
    if (!this.editing) return;

    const tags = this.storageService.getTags();

    if (this.editing.id === 0) {
      this.editing.id = Date.now();
      tags.push(this.editing);
    } else {
      const index = tags.findIndex(t => t.id === this.editing!.id);
      if (index !== -1) {
        tags[index] = { ...this.editing };
      }
    }

    this.storageService.saveTags(tags);
    this.tags = this.storageService.getTags();
    this.cancelEdit();
  }

  dialogAddTag() {
    this.editing = {
      id: 0,
      name: '',
      color: '#000000'
    };
  }

  deleteTag(tag: Tag) {
    this.storageService.deleteTag(tag.id);
    this.tags = this.storageService.getTags();
  }
}
