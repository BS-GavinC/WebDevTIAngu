import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';
import { Article } from '../../../interfaces/article.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [EnfantComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  articles : Article[] = []

  protected newArticleName = "";

  protected addArticle(){
    this.articles.push({
      id : this.articles.length > 0 ? Math.max(...this.articles.map(x => x.id)) + 1 : 1,
      name : this.newArticleName
    })
    this.newArticleName = ""
    console.log(this.articles);

  }

  protected deleteElem(id : number){
    let element : Article | undefined = this.articles.find(x => x.id === id)
    if (element){
      this.articles.splice(this.articles.indexOf(element), 1)
    }
  }

}
