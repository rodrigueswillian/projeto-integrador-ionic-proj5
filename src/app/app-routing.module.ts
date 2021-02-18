import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// 1. Importar dependências
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// 2. Define redirecionamentos
const toLogin = () => redirectUnauthorizedTo(['/login']);
const isLogged = () => redirectLoggedInTo (['/home']);


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),

  
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule),

    //Só pode ser vista se tiver logado
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogin }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),

    
    //Só pode ser vista se não tiver logado
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: isLogged }
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),

      //Só pode ser vista se tiver logado
      canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogin }
  },
  {
    path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  }
];
//  A página Erro sempre tem que ser a última rota . 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
