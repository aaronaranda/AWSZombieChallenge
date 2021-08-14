import React, { useState, useEffect } from 'react';
import NewsArticle from '../components/pages/NewsArticle/NewsArticle';

require('dotenv').config({ path: '.env' });



const News = () => {    
    const [articles, setArticles] = useState([]);
    
    
   
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch(
                    `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?qInTitle="zombie apocalypse"&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`                    
                )
                const articles = await res.json();
                console.log(articles);
                setArticles(articles.articles)
            } catch (error) {
                console.error(error);
            }            
        }
        fetchArticles();
    }, []);

    return (
        <div className="main-news">
            <h1 className="text-4x1 font-bold text-white text-cetner mb-4">
                Latest Zombie News
            </h1>
            <section className="px-5 pt-10 pb-20">
            {
                articles ? articles.map(
                (news) => <NewsArticle data={news} key={news.url} />
                    ): "No Attacks to Report"
            }
            </section>
        </div>
    );
};

export default News;



