
//axios.defaults.baseURL = 'http://192.168.43.194:5000/api/'
let data;
const posts = document.querySelector('#post-content');

axios.get('http://localhost:8000/api/v2/posts')
  .then(function (response) {    
    data = response.data;
    let postImg; 
    let authorImg;
    data.forEach((value) => {
        axios.get('http://localhost:8000'+value.postImage)
            .then(function (response) {
                postImg = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:8000'+value.authorImage)
            .then(function (response) {
                authorImg = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log(authorImg)
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
  .catch(function (error) {
    console.log(error);
  })


function ConvertNumberToPersion() {
    persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
    function traverse(el) {
        if (el.nodeType == 3) {
            var list = el.data.match(/[0-9]/g);
            if (list != null && list.length != 0) {
                for (var i = 0; i < list.length; i++)
                    el.data = el.data.replace(list[i], persian[list[i]]);
            }
        }
        for (var i = 0; i < el.length; i++) {
            traverse(el[i]);
        }
    }
    console.log(traverse(245));
}

ConvertNumberToPersion()
