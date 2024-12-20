//higher order function
//takes one or more fxn as an argument (parameter)
//OR returns a fxn as the result

import {posts} from "./posts.js";
posts.forEach((post) => {
  console.log(post);
});
console.clear();

//filter data based on userId value
const filteredPosts = posts.filter(post => {
  return post.userId === 1;
});
console.log(filteredPosts);


//returns array of id*10
const mappedPosts = filteredPosts.map(post => {
  return post.id * 10;
});
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum,post) => {
  return sum + post;
});
console.log(reducedPostsValue);