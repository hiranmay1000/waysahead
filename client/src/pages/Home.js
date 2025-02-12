
// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Home.css'

function Home() {
    
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
    <div className="home-container">

        <div className='ai-image-container'>
            <section className="hero">
                <h1>Welcome to <span className='company-name'>WaysAhead Global</span> </h1>
                <p>Innovating AI & Data Analytics for the Future</p>
            </section>
        </div>
      
      <section className="solutions">
        <h2>Our Expertise</h2>
        <p>Explore AI solutions transforming businesses worldwide.</p>
        <div className='cards-container'>
            <div className='card'><h3>AI Shop Assist</h3><div className='image' ></div><p>Great in-store salespeople, but why leave eCommerce customers unsupported?</p><button>Claim your free AI AGENT now!</button></div>
            <div className='card'><h3>Geo-Spatial Analytics</h3><div className='image'></div><p>You can change decor, layout, or offerings—but how often can you change location?</p><button>Claim your free AI AGENT now!</button></div>
            <div className='card'><h3>In-Store Analytics</h3><div className='image'></div><p>Lifeline of any retail store that uses powerful AI/ML algorithms and analytics like:</p><button>Claim your free AI AGENT now!</button></div>
            <div className='card'><h3>SCM Analytics</h3><div className='image'></div><p>Predict your ROI on logistics with simplified shipment and warehouse analytics.</p><button>Claim your free AI AGENT now!</button></div>
            <div className='card'><h3>Video Analytics</h3><div className='image'></div><p>Understand customer telemetry using our most powerful and advanced VMS</p><button>Claim your free AI AGENT now!</button></div>
            <div className='card'><h3>Robotics</h3><div className='image'></div><p>Enhance your presence and digital footprint, get your Robot deployed today</p><button>Claim your free AI AGENT now!</button></div>
        </div>
      </section>
      
      <section className="news">
        <h2 className='news-heading'>Latest News Updates</h2>
        <ul>
        {news.map((item, index) => (
            <li key={index}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            </li>
        ))}
        </ul>

      </section>

    </div>
  );
}

export default Home;