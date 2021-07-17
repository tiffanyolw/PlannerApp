import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then(m => m.GoalsPageModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./pages/achievements/achievements.module').then(m => m.AchievementsPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesPageModule)
  },
  {
    path: 'video-diary',
    loadChildren: () => import('./pages/video-diary/video-diary.module').then(m => m.VideoDiaryPageModule)
  },
  {
    path: 'images-diary',
    loadChildren: () => import('./pages/images-diary/images-diary.module').then(m => m.ImagesDiaryPageModule)
  },
  {
    path: 'todo/add-task',
    loadChildren: () => import('./pages/todo/add-task/add-task.module').then(m => m.AddTaskPageModule)
  },
  {
    path: 'goals/add-goal',
    loadChildren: () => import('./pages/goals/add-goal/add-goal.module').then(m => m.AddGoalPageModule)
  },
  {
    path: 'notes/add-note',
    loadChildren: () => import('./pages/notes/add-note/add-note.module').then( m => m.AddNotePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
