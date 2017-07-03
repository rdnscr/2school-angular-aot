import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'todo-aot', pathMatch: 'full' },
  { path: 'todo-aot', loadChildren: './+todo-aot#TodoAoTModule', data: { title: 'Todo AoT' } },
  { path: '**', component: NoContentComponent },
];
