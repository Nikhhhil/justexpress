import React from 'react'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import Posts from './components/Posts/Posts'; 
//import Form from './components/Form/Form';
//import useStyles from './styles'
//import {useDispatch} from 'react-redux';
import { Container } from '@material-ui/core';
//import {getPosts} from './actions/posts';
import Navbar from './components/navbar/navbar';
import Home from './components/home/Home';
import Auth from './components/Auth/Auth'
const App = () =>(
   
 <BrowserRouter>
<Container maxidth="lg" >

<Navbar/>

<Routes>
    
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Auth" element={<Auth />} />
</Routes>




</Container>
</BrowserRouter>


);
export default App; 