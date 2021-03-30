'use strict'

let form=document.getElementById('form');
let subjectselect=document.getElementById('subjects');
let subjects=['','Coding','3D printing','Cyber security','AI '];
let showArticle=document.getElementById('showarticle')

for(let i=0;i<subjects.length;i++){
    let option=document.createElement('option')
    option.textContent=subjects[i];
subjectselect.append(option);
}

const Article = function(name,title,subject,content,date){
    this.name=name;
    this.title=title;
    this.subject=subject;
    this.content=content;
    this.date=date;
    Article.all.push(this);
    localStorage.setItem('article',JSON.stringify(Article.all))
}
Article.all=[];
let articleinfo;
form.addEventListener('submit',formhandler);
function formhandler(event){
    event.preventDefault()
   const author=event.target.name.value;
  
   const title=event.target.title.value;
   const subject=event.target.subjects.value;
   const content=event.target.content.value;
   const date=event.target.date.value;
   articleinfo= new Article(author,title,subject,content,date);
   showarticle()
}
 function randomnumber(min,max){
     return Math.floor (max-min+1)-(min);
 }
function showarticle(){
    const articletitle=document.createElement('h3');
    articletitle.textContent=articleinfo.title;
    const img = document.createElement('img')
    img.src= './asac_ltuc.jpg'
    const authoeName=document.createElement('h3');
    authoeName.textContent='Author: '+articleinfo.name;
    const articledate=document.createElement('h3');
    articledate.textContent='Date: '+articleinfo.date
    const likes=document.createElement('h4');
    likes.textContent=randomnumber(0,500);
    const articlesub=document.createElement('h4');
    articlesub.textContent=articleinfo.subject
    const articlecont=document.createElement('h3');
    articlecont.textContent=articleinfo.content;
    const space=document.createElement('br')
    showArticle.appendChild(articletitle)
    showArticle.appendChild(img)
    showArticle.appendChild(authoeName);
    showArticle.appendChild(articledate);
    showArticle.appendChild(likes);
    showArticle.appendChild(articlesub);
    showArticle.appendChild(articlecont);
    showArticle.appendChild(space);

}