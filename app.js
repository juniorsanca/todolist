/**
 * 
 * 
 */
function createArticle(post){
    const article = document.createElement('article');

    const h2 = document.createElement('h2')
    h2.innerHTML = post.title;
    article.appendChild(h2)

    const p = document.createElement('p')
    p.innerHTML = post.body;
    article.appendChild(p)
    // article.innerHTML = `
    // <h2>${post.title}</h2>
    // <p>${post.body}</p>`
    return article
}

// function createElementWithText(tagName, content){
//     const element = document.createElement(tagName)
//     element.innerText = content
//     return element
// }

async function afficherArticles(){
    const div = document.querySelector('div');
    const p = document.createElement('p');
    p.innerHTML = 'chargement...';
    div.appendChild(p)

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5",{
      method: "GET", // ou 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    });
      const posts = await response.json();
    //console.log(posts)
      p.remove()
      for(let post of posts){
        div.appendChild(createArticle(post))
      }
    } 
    catch (erreur) {
    //   console.error("Erreur :", erreur);
        p.innerHTML = 'impossible dafficher les articles';
        p.style.color= 'red'
    }
}

afficherArticles();
