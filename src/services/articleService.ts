import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Article } from 'src/models/article.model';

@Injectable({
    providedIn: 'root'
  })

  export class ArticleService{

    public ArticleDB : Article [] = GLOBAL._DB.article;
    
    constructor(private httpClient: HttpClient){


    }

    
    GetAllArticle():Promise<Article[]>{
        //return this.httpClient.get<Member[]>('linktoRestAPI').toPromise();
        return new Promise (resolve => resolve(this.ArticleDB));
      }

  }