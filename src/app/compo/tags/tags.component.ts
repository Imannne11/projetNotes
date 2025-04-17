import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TagComponent } from '../tag/tag.component';
import { Tag } from '../../tag';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, TagComponent, FormsModule],
  templateUrl: './tags.component.html',
  styleUrl:'./tags.component.css'
})
export class TagsComponent {
  tags: Tag[] = [];
  editing: Tag | null = null;

  constructor(private storageService: StorageService) {
    this.tags = this.storageService.getTags();
  }

  dialogAddTag() {
    this.editing = { id: 0, name: '', color: '#000000' };
  }

  deleteTag(tag: Tag) {
    this.storageService.deleteTag(tag.id);
    this.tags = this.storageService.getTags();
    if (this.editing?.id === tag.id) this.editing = null;
  }

  startEditTag(tag: Tag) {
    this.editing = { ...tag }; // copie pour éviter le binding direct
  }

  cancelEdit() {
    this.editing = null;
  }

  saveTag() {
    if (!this.editing) return;

    if (this.editing.id === 0) {
      const newTag = { ...this.editing, id: Date.now() };
      this.storageService.addTag(newTag);
    } else {
      this.storageService.updateTag(this.editing);
    }

    this.tags = this.storageService.getTags();
    this.editing = null;
  }
}
