import axios from 'axios'
import { all } from 'express/lib/application'

const Card = (article) => {

  const articleWrapper = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  articleWrapper.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  articleWrapper.appendChild(headline)
  articleWrapper.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(img)
  author.appendChild(authorName)

  authorName.textContent = article.authorName
  headline.textContent = article.headline;
  img.src = article.authorPhoto;

  return articleWrapper


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

// const articleList = (data) => {
//   console.log(data)
//   const section = document.createElement("section")
//   const array = Array.from(data)
//   array.forEach(articleData => {
//     section.appendChild(Card(articleData))
//   })
//   return section;
// }


const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`)
  .then(resp => {
  const parentElement = document.querySelector(selector)
  const allTheArticles = resp.data.articles;
  const tabs = Object.keys(allTheArticles)

  tabs.forEach(tab => {
    const articles = allTheArticles[tab]
    articles.forEach(article =>{
      const card = Card(article)
      parentElement.appendChild(card)
    })
  })
    
    const data = resp.data.articles
    console.log(data)
    //let combinedArticleArray = []
    //combinedArticleArray.push(...resp.data.articles.boostrap,...resp.data.articles.javascript,...resp.data.articles.jquery,...resp.data.articles.node,...resp.data.articles.technology)
    //console.log(combinedArticleArray)
  })
  .catch(err => console.log(err))
  .finally(() => console.log('done!'))


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
