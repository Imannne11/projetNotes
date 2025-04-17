import { Routes } from '@angular/router';
import { TagsComponent } from './compo/tags/tags.component';
import { NotesComponent } from './compo/notes/notes.component';

export const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'tags', component: TagsComponent },
];
