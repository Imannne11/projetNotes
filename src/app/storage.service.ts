import { Injectable } from '@angular/core';
import { Tag } from './tag';
import { Note } from './note.model';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly TAGS_KEY = 'tags';
  private readonly NOTES_KEY = 'notes';

  // Méthode pour vérifier si nous sommes dans un environnement navigateur
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && window.localStorage !== undefined;
  }

  getTags(): Tag[] {
    if (this.isBrowser()) {
      const tags = localStorage.getItem(this.TAGS_KEY);
      return tags ? JSON.parse(tags) : [];
    }
    return []; // Retourne un tableau vide si on est côté serveur
  }

  saveTags(tags: Tag[]): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.TAGS_KEY, JSON.stringify(tags));
    }
  }

  addTag(tag: Tag): void {
    const tags = this.getTags();
    tags.push(tag);
    this.saveTags(tags);
  }

  updateTag(updatedTag: Tag): void {
    let tags = this.getTags();
    tags = tags.map(tag => tag.id === updatedTag.id ? updatedTag : tag);
    this.saveTags(tags);
  }

  deleteTag(tagId: number): void {
    const tags = this.getTags().filter(tag => tag.id !== tagId);
    this.saveTags(tags);
  }

  getNotes(): Note[] {
    if (this.isBrowser()) {  // Vérifie si l'on est dans un navigateur
      const storedNotes = localStorage.getItem(this.NOTES_KEY);
      return storedNotes ? JSON.parse(storedNotes) : [];
    }
    return [];  // Retourne un tableau vide si on est côté serveur
  }
  

  saveNotes(notes: Note[]): void {
    localStorage.setItem(this.NOTES_KEY, JSON.stringify(notes));
  }

  addNote(note: Note): void {
    const notes = this.getNotes();
    notes.push(note);
    this.saveNotes(notes);
  }

  updateNote(updatedNote: Note): void {
    let notes = this.getNotes();
    notes = notes.map(note => note.id === updatedNote.id ? updatedNote : note); // Remplacer la note par sa version mise à jour
    this.saveNotes(notes);
  }

  deleteNote(noteId: number): void {
    const notes = this.getNotes().filter(n => n.id !== noteId);
    this.saveNotes(notes);
  }
}
