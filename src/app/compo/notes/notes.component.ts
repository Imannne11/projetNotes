import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../../note.model';
import { Tag } from '../../tag';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Ajouter CommonModule et FormsModule
})
export class NotesComponent {
  notes: Note[] = [];
  editing: Note | null = null;
  tags: Tag[] = [];
  search: string = '';
  newChecklistItem: string = ''; // Variable pour la nouvelle tâche à ajouter à la checklist

  constructor(private storageService: StorageService) {
    this.notes = this.storageService.getNotes();
    this.tags = this.storageService.getTags();
  }

  // Démarrer l'ajout d'une nouvelle note
  startAddNote() {
    this.editing = new Note(
      0,
      '',
      new Date(),
      '#ffffff',
      [],
      'texte', // Par défaut, ajouter une note de type texte
      []
    );
  }

// Ajouter un nouvel élément à la checklist
// Ajouter un nouvel élément à la checklist
addChecklistItem() {
  if (this.newChecklistItem.trim()) {
    const newItem = {
      content: this.newChecklistItem, // Le contenu de l'élément
      checked: false                   // L'élément est initialement non coché
    };
    if (this.editing && this.editing.type === 'checklist') {
      this.editing.checklist.push(newItem); // Ajouter à la checklist de la note en cours
      this.newChecklistItem = ''; // Réinitialiser le champ de saisie
    }
  } else {
    console.log('Le champ est vide, aucun élément ajouté à la checklist');
  }
}



// Sauvegarder la note après modification
saveNote() {
  if (!this.editing) return;

  // Récupérer les notes existantes
  const notes = this.storageService.getNotes();

  // Si l'édition concerne une nouvelle note
  if (this.editing.id === 0) {
    this.editing.id = Date.now(); // Attribuer un ID unique
    notes.push(this.editing); // Ajouter la nouvelle note
  } else {
    // Si c'est une note existante, on la met à jour
    const index = notes.findIndex(n => n.id === this.editing!.id);
    if (index !== -1) {
      notes[index] = { ...this.editing }; // Mettre à jour la note
    }
  }

  // Sauvegarder les notes dans le service de stockage
  this.storageService.saveNotes(notes);

  // Actualiser la liste des notes pour refléter les changements
  this.notes = this.storageService.getNotes();

  // Annuler l'édition une fois la sauvegarde terminée
  this.cancelEdit();
}


  

  // Annuler l'édition d'une note
  cancelEdit() {
    this.editing = null;
  }

  // Fonction pour trackBy dans le *ngFor (Améliore les performances)
  trackByNoteId(index: number, note: Note): number {
    return note.id;
  }

  // Modifier une note
  editNote(note: Note) {
    this.editing = { ...note };  // Préparer la note pour édition
  }

  // Supprimer une note
  deleteNote(noteId: number) {
    this.notes = this.notes.filter(note => note.id !== noteId); // Filtrer la note à supprimer
    this.storageService.saveNotes(this.notes);  // Sauvegarder les notes après suppression
  }

  
}
