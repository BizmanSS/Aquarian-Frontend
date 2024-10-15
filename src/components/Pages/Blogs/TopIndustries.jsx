import React from 'react';
import BlogRightop from '../../../Assets/BLOG_RIGHT-top.jpeg';
import './TopIndustries.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

export default function TopIndustries() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleNavigatemain = () => {
    navigate('/blogs');}
 
  return (
    <div className="Top-industry-container">
      {/* Navigators Section */}
      <nav className="Top-industry-navigators">
        <ul className="Top-industry-navigator-list">
          <li className="Top-industry-navigator-item">Home</li>
          <li className="Top-industry-navigator-item">&gt;</li>
          <li className="Top-industry-navigator-item"  onClick={handleNavigatemain}>Blog</li>
        </ul>
      </nav>

      {/* Heading Section */}
      <h1 className="Top-industry-heading">Top Industries in the World</h1>

      {/* Image Section */}
      <div className="Top-industry-image-section">
        <img src={BlogRightop} alt="Top Industries" className="Top-industry-responsive-image" />
      </div>

      {/* Content Section */}
      <div className="Top-industry-content-section">
      <h1 className='Top-industry-content-heading'>1. McMaster University</h1>
        <p>
        Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.
        </p>
        <h1 className='Top-industry-content-heading'>2. McMaster University</h1>
        <p>
        Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.
        </p>
        <h1 className='Top-industry-content-heading'>3. McMaster University</h1>
        <p>
        Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.
        </p>
        <h1 className='Top-industry-content-heading'>4. McMaster University</h1>
        <p>
        Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.
        </p>
        <h1 className='Top-industry-content-heading'>5. McMaster University</h1>
        <p>
        Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.
        </p>
        <h1 className='Top-industry-content-heading'>6. McMaster University</h1>
        <p>
        Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.
        </p>
      </div>
    </div>
  );
}
