import axios from 'axios'
//url pointing to back end route
const url ='https://express-it-777.herokuapp.com/posts'; 
//http://localhost:5000
export const fetchPosts= ()=> axios.get(url); 
export const createPost= (newPost)=> axios.post(url,newPost); 
//redux will be used because it is scalablae 

export const updatePost =(id,updatedPost) =>axios.patch(`${url}/${id}`,updatedPost);
export const deletePost =(id) =>axios.delete(`${url}/${id}`);
export const likePost =(id) => axios.patch(`${url}/${id}/likePost`);