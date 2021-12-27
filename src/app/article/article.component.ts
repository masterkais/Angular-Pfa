import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article.model';
import { ArticleService } from 'src/services/articleService';


@Component({
  selector: 'app-article',

  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  articleDB : Article[] | undefined
  constructor(private ArticleSer : ArticleService) { }

  public title ="";
  public picture = "";
  public description = "";



  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles():void{
    this.ArticleSer.GetAllArticle().then((Tab)=> (this.articleDB=Tab));
  }

  articleDisplay():void{
    
  }
}
