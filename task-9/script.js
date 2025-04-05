let postContainer = document.getElementById('post-container');
let loader = document.getElementById('loader');

let limit = 3; 
let page = 1;  

async function loadPosts() {
  loader.style.display = 'block';
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  const data = await res.json();
  appendPosts(data);
  loader.style.display = 'none';
  return data;
}

function appendPosts(posts) {
  posts.forEach(post => {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    postContainer.appendChild(div);
  });
}

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    page++;
    loadPosts();
  }
});

function ensureScrollableContent() {
  const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
  if (!isScrollable) {
    page++;
    loadPosts().then(ensureScrollableContent);
  }
}


loadPosts();
loadPosts().then(ensureScrollableContent);
