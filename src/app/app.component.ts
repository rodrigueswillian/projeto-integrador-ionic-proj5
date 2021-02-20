import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Notícias', url: '/news', icon: 'newspaper' },
    { title: 'Faça Contato', url: '/contacts', icon: 'chatbox-ellipses' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
    { title: 'e404', url: '/e404', icon: 'alert-circle' },
    { title: 'Lixo', url: '/folder/Spam', icon: 'trash' },
  ];
  constructor(
    
       // 2. Injeta dependências
       public auth: AngularFireAuth,
  ) {}

  openSite(){
    window.open("https://www.nba.com/news"); 
    return false;
  }
}
