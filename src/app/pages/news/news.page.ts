import { Component, OnInit } from '@angular/core';

// 1. Importa dependências
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  // 3. Atributos
  apiKey = 'f6b1d5dc3f4c47c483446e353984603f'; // -->  Obtenha de  'newsapi.org'
  apiQuery = 'Notícias da NBA'; // --> Notícias sobre...
  apiITens = 10; // --> exibir ... noticias (máximo20)
  apiURL = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}&source=google-news-br&language=pt&q=${this.apiQuery}`;
  newsList: any; // Armazena as notícias recebidas


  constructor(

    // 2. Injeta dependências
    private http: HttpClient
  ) { }

  ngOnInit() {

    // 4. Obtenha as notícias da API REST (JSON) usando HTTP
    this.http.get(this.apiURL).subscribe(
      (data: any) => {

        // 5. Atribui À  VIEW De Notícias
        this.newsList = data.articles.slice(0, this.apiITens);
        // console.log(this.newsList);
      });
  }
  readNews(link: any) {
    window.open(link);
    return false;
  }

}
