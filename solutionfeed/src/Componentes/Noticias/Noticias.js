import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./Noticias.css";

const Noticias = () =>{
    
    const [posts, setPosts] = useState([])
    
    const getPosts = async() => {
        try{
            const response = await axios.get("https://newsapi.org/v2/everything?q=inovação-da-agricultura&sortBy=relevancy&apiKey=d9fde950f0c74171b93a26ad029481eb"); 
            const data = response.data;
            const posts = data.articles;
            setPosts(posts);
        } catch(err){
            console.log(err);
        }
    
    }
    
    useEffect(() => {
        getPosts();
        console.log(posts)
        
        
    }, []);
    var total = 0;
    return <div className='noticias'>
        <h1>Ultimas noticias</h1>
        {posts.length === 0 ? (
        <p>Carregando...</p>
        ) : (
            posts.map((post) => (
                <div className='post' key={total+=1}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <Link to={'/posts/$total'} className="btn">Ler mais</Link>
                </div>
            ))
        )}
        </div>;
}

export default Noticias;