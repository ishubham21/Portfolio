window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')
    loader.classList.add('hide-loader')
})

if ("serviceWorker" in navigator) {
    //regestering service worker
    //service worker is a file which is used to catch data
    navigator.serviceWorker.register("./service-worker.js")
        .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(err => {
            //registration failed 
            console.log('ServiceWorker registration failed: ', err);
        });
}
else {
    console.log('No service-worker on this browser');
}
//function to fetch data from Medium
async function getBlogData() {
    try {
        const req = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ishubham21')

        const parsedReq = await req.json()

        return parsedReq
    } catch (error) {
        console.log('There is some error in fetching the request');
    }
    
}

var blogData = getBlogData()
blogData.then(data => {createCards(data.items)})
.catch(err => console.log('Maybe an error has occured'))

//a function to dynamically create cards
function createCards(blogsArr){

    var blogContainer = document.querySelector('.blog-container')
    blogContainer.innerHTML = ''
    for (let blog = 0; blog < blogsArr.length; blog++) {
        blogContainer.innerHTML += `<div class="blog">
                                        <img src="${blogsArr[blog].thumbnail}" alt="">
                                        <div class="text-content">
                                           <a href="${blogsArr[blog].link}" class="link-btn">
                                              <h2>${blogsArr[blog].title}</h2>
                                           </a>
                                           <h4><span class='dark'>Published on:</span> ${blogsArr[blog].pubDate}</h4>
                                           <h4><span class='dark'>Category:</span> ${blogsArr[blog].categories[0]}</h4>
                                        </div>
                                        <a href="${blogsArr[blog].link}" class="link-btn">
                                            <button>Read Here</button>
                                        </a>
                                    </div>`
    }
}