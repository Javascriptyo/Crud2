const postsList = document.querySelector('.posts-list')

const url = 'http://localhost:5000/api/posts'

// Get - Read the posts
// Method: GET
fetch(url)
   .then(res => console.log(res));