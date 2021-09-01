
let data;
const posts = document.querySelector('#post-content');

fetch('http://localhost:8000/api/v2/posts')
  .then(response => response.json())
  .then(data => {
    let postImg; 
    let authorImg;
    data.forEach((value) => {
        fetch('http://localhost:8000'+value.postImage)
            .then(function (response) {
                postImg = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        fetch('http://localhost:8000'+value.authorImage)
            .then(function (response) {
                authorImg = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
                <div class="card-img">
                    <img src="${postImg}" alt="img post" />
                </div>
                <div class="card-post">
                    <header class="post-header">
                        <div class="post-author">
                            <a href="#">
                                <img class="avatar" src="${authorImg}" alt="avatar" />
                            </a>
                            <a href="#" class="author-name">${value.author}</a>
                        </div>
                        <button>دنبال کردن</button>
                    </header>
                    <div class="post-content">
                        <a href="#" class="article-link">
                            <h2 class="post-title"> 
                                ${value.title}
                                </h2>
                            <div class="post-text Text-Style">
                                ${value.description}
                            </div>
                        </a>
                    </div>
                    <footer class="post-footer">
                        <div class="flex-footer">
                            <p class="date">
                                ${value.date}
                            </p>
                            <span class="circle"></span> 
                            <span class="time">${value.duration}</span>
                            <span class="circle"></span> 
                            <span class="tag">
                                ${value.tag}
                            </span>
                            <span class="save"><img src="./img/archive-add_3.svg"></span>
                        </div>
                    </footer>
                </div>
        `
        posts.appendChild(article)
    })
  })
  .catch(console.error);