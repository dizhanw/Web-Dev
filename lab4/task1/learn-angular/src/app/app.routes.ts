import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';

export const routes: Routes = [

  // Главная страница
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },

  // Страница пользователя
  {
    path: 'user',
    title: 'User Page',
    component: User,
  }

];