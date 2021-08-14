import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ data }) => {
    return (
        <div className="article-main">
            <div className="article">
                <h1 
                    className="article-title"
                    onClick={() => (window.location.href=data.url)}
                >
                {data.title}</h1>
                <p className="article-description">{data.description}</p>
                {!!data.urlToImage && 
                    <img 
                        src={data.urlToImage}
                        onClick={() => (window.location.href=data.url)}
                    />
                }
                <p className="article-date">{data.publishedAt}</p>
                <p className="article-author">{data.author}</p>
            </div>
        </div>
    );
};
export default NewsArticle;
