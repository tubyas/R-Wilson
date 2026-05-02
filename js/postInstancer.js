const template = document.getElementById("post-template");

let stampAltNumber = 1;

function createPost({href, imgSrc, title, date, desc}) {
  const post = template.content.cloneNode(true);

  post.querySelector("a").href = href;

  post.querySelector("img").src = imgSrc;
  post.querySelector("img").alt = `stamp${stampAltNumber}`;
  stampAltNumber++;

  post.querySelector("h2").textContent = title;
  post.querySelector(".date").textContent = date;
  post.querySelector("p").textContent = desc;

  document.querySelector("article").appendChild(post);
}

fetch("json/posts.json")
    .then(response => response.json())
    .then(posts => posts.forEach(post =>
        createPost({
            href: post.href,
            imgSrc: post.imgSrc,
            title: post.title,
            date: post.date,
            desc: post.desc
        })
    ))