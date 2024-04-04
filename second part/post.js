 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const userId = urlParams.get('userId');


 fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
 .then(response => response.json())
 .then(posts => {
     const userPostsTitle = document.getElementById("userPostsTitle");
     const userPostsList = document.getElementById("userPostsList");


     posts.forEach(post => {
         const li = document.createElement("li");
         li.innerHTML = `
             <strong>Title:</strong> ${post.title}<br>
             <strong>Body:</strong> ${post.body}<br><br>
         `;
         userPostsList.appendChild(li);
     });
 })
 .catch(error => console.error('Hata:', error));