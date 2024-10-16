import React from 'react';
import './NewsWholePage.css'; // Import the CSS file
import Canada_A from "../../../Assets/Can_news_b.jpg";

export default function NewsWholePage() {
  return (
    <div className="news-container">
      <nav className="news-nav">
        <div className="nav-links">
          <a href="#" className="text-primary">Home</a>
          <a href="#" className="text-primary">&gt;</a>

          <a href="#" className="text-primary">Newsroom</a>
        </div>
      </nav>

      <h1 className="news-title">Aquarian Newsroom</h1>

      <div className="news-header">
        <h2 className="news-subtitle">IRCC reducing Spousal Open Work Permits by more than 100,000 over the next three years</h2>
        
      </div>
      <div className="news-meta">
         <div className='news-meta-date'> <span > Sunday, 1 Jan 2024</span></div>
          <span className="divider">|</span>
          <span>4 min read</span>
          <span className="divider">|</span>
          <span>2,404 views</span>
        </div>

      <img src={Canada_A} alt="Cityscape" className="news-image" />

     
<p>For decades, Canada has been a hotspot for international students. Ambitious youngsters wanting to reach the zenith come from all over the world to study at these top notch universities. Let us delve into the academic realm of Canada. Here are the top 10 universities.</p>
      <h3 className="section-title">1. University of Toronto (U of T)</h3>
      <p className="section-content">
      Leading the pack is U of T. This globally renowned university offers a wide variety of impeccable courses. The top courses in this university include anthropology, human biology, computer science, statistical science and psychology. With three campuses, University of Toronto might just be the place for you to spread your wings.
      </p>

      <h3 className="section-title">2. University of British Columbia (UBC)</h3>
      <p className="section-content">
      UBC is where you’ll find breathtaking views and world-class research. Ranking at the 35th position in the Best Global Universities in the world, it has an acceptance rate of 52.4% which means you have to pull your socks up to become a part of this eminent institution. Situated in Vancouver, it’s perfect for those who want to hit the books and the beach on the same day.
      </p>

      <h3 className="section-title">3. McGill University</h3>
      <p className="section-content">
      In the heart of Montreal, McGill is the Hogwarts of Canada. Apart from its distinguishable culture, it is the best place for international students because of its diversity. Immigrant students make up about 30% of the total student population. It’s prestigious, it’s historic, and it’s surrounded by the best food Canada has to offer.
      </p>

      <h3 className="section-title">4. McMaster University</h3>
      <p className="section-content">
      Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.
      </p>
      <div className='main-page-btn'> Main Page</div>
    </div>
  );
}
