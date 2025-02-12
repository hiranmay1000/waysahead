import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/News.css'

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=6325d98595a54eb98a80c70143b99d63')
      .then(response => {
        console.log('API Response:', response.data); // Debugging
        setNews(response.data.articles); // Correct key for articles
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <section className="news news-page">
      <h2 className='news-heading'>Latest News Updates</h2>
      <ul>
        {news.length > 0 ? (
          news.map((item, index) => (
            <li className='new' key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.urlToImage} alt={item.title} style={{ width: "300px", height: "auto", borderRadius: "5px", marginBottom: "15px"}} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </a>
            </li>
          ))
        ) : (
          <p>Please wait...</p>
        )}
      </ul>

    </section>
  );
}

export default News;






