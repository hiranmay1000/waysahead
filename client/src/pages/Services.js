import React from 'react';
import './styles/Services.css'

function Services() {
  return (
    <div className="services-container">
      <section className="solutions services">
        <h2>Our Services</h2>
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
    </div>
  );
}

export default Services;