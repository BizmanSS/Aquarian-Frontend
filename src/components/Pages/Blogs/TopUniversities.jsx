import React from 'react';
import UNIVERSITIES from "../../../Assets/CANADA_UNIVERSITIES.jpg";
import './TopUniversities.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

export default function TopUniversities() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleNavigatemain = () => {
    navigate('/blogs');}
  return (
    <div className="blogs-container-main">
    <div className="top-universities-container">
      <nav className="top-navigators">
        <ul className="top-navigator-list">
          <li className="top-navigator-item">Home</li>
          <li className="top-navigator-item">&gt;</li>

          <li className="top-navigator-item" onClick={handleNavigatemain}>Blog</li>
        </ul>
      </nav>

      <h1 className="top-page-heading">Top 10 Universities in Canada</h1>

      <div className="top-image-section">
        <img src={UNIVERSITIES} alt="Top Universities" className="top-responsive-image" />
      </div>

      <div className="top-content-section">
        <p>
        For decades, Canada has been a hotspot for international students. Ambitious youngsters wanting to reach the zenith come from all over the world to study at these top notch universities. Let us delve into the academic realm of Canada. Here are the top 10 universities.
        </p>
        <h1 className='top-content-heading'>1. University of Toronto (U of T)</h1>
        <p>
        Leading the pack is U of T. This globally renowned university offers a wide variety of impeccable courses. The top courses in this university include anthropology, human biology, computer science, statistical science and psychology. With three campuses, University of Toronto might just be the place for you to spread your wings.
        </p>
        <h1 className='top-content-heading'>2. University of British Columbia (UBC)</h1>
        <p>
        UBC is where you’ll find breathtaking views and world-class research. Ranking at the 35th position in the Best Global Universities in the world, it has an acceptance rate of 52.4% which means you have to pull your socks up to become a part of this eminent institution. Situated in Vancouver, it’s perfect for those who want to hit the books and the beach on the same day .
        </p>
        <h1 className='top-content-heading'>3. McGill University</h1>
        <p>
        In the heart of Montreal, McGill is the Hogwarts of Canada. Apart from its distinguishable culture, it is the best place for international students because of its diversity. Immigrant students make up about 30% of the total student population. It’s prestigious, it’s historic, and it’s surrounded by the best food Canada has to offer.
        </p>
        <h1 className='top-content-heading'>4. McMaster University</h1>
        <p>
        Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.
        </p>
        <h1 className='top-content-heading'>5. University of Toronto (U of T)</h1>
        <p>
        Leading the pack is U of T. This globally renowned university offers a wide variety of impeccable courses. The top courses in this university include anthropology, human biology, computer science, statistical science and psychology. With three campuses, University of Toronto might just be the place for you to spread your wings.
        </p>
        <h1 className='top-content-heading'>6. University of British Columbia (UBC)</h1>
        <p>
        UBC is where you’ll find breathtaking views and world-class research. Ranking at the 35th position in the Best Global Universities in the world, it has an acceptance rate of 52.4% which means you have to pull your socks up to become a part of this eminent institution. Situated in Vancouver, it’s perfect for those who want to hit the books and the beach on the same day .
        </p>
        <h1 className='top-content-heading'>7. McGill University</h1>
        <p>
        In the heart of Montreal, McGill is the Hogwarts of Canada. Apart from its distinguishable culture, it is the best place for international students because of its diversity. Immigrant students make up about 30% of the total student population. It’s prestigious, it’s historic, and it’s surrounded by the best food Canada has to offer.
        </p>
        <h1 className='top-content-heading'>8. McMaster University</h1>
        <p>
        Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.
        </p>
      </div>
      <div className='mainpage-button-top-universities'>
         <button className='mainpage-btn' onClick={handleNavigatemain}>Go to Main Page</button></div>
    </div>
    </div>
  );
}
