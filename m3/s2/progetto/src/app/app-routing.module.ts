import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './todo/todo.component';
import { CompletateComponent } from './completate/completate.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'completate',
    component: CompletateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
