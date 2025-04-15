import { Routes } from '@angular/router';
import { TagsComponent } from './tags/tags.component';

export const routes: Routes = [
  { path: '', component: TagsComponent }, // Route par défaut vers TagsComponent
  { path: 'tags', component: TagsComponent }, // Route pour accéder à /tags
];
