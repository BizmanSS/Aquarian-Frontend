import React from 'react'
import './RecentNewsreadmore.css'
import BlogImg from '../../../Assets/RecentBlogImg.jpeg';

export default function RecentNewsreadmore() {
  return (
    <div className='readmore-news-page-first'>
      {/* SECTION -1  Navigation units  */}
      <div className='read-more-news-navigations'>
        <div className='news-navigate-items'>
          <li>Home</li>
          <li>&gt;</li>

          <li>News</li>

          </div>
          
  

           </div>
           <p className='aq-news-heading'>Aquarian Blogs</p>

    {/* Section -2  for one page read more   */}
    <div>
    <p className='aq-news-heading-2'>Top-10 Universities in canada</p>
    <p className='aq-news-date'>Sunday , 1 Jan 2024</p>


      <div >
        <img src={BlogImg} alt='image here'className='news-rm-img'/>
      </div>
      <div className='news-facitlities-list' >
        <li>study</li>
        <li>Aquarian immigration</li>
        <li>canada</li>
        <li>latest</li>
      </div>
      <div className='readmore-news-content'>
        <p>For decades, Canada has been a hotspot for international students. Ambitious youngsters wanting to reach the zenith come from all over the world to study at these top notch universities. Let us delve into the academic realm of Canada. Here are the top 10 universities.</p>
        <h1 className='RecentNews_heading'>2. University of British Columbia (UBC)</h1>
        <p>UBC is where you’ll find breathtaking views and world-class research. Ranking at the 35th position in the Best Global Universities in the world, it has an acceptance rate of 52.4% which means you have to pull your socks up to become a part of this eminent institution. Situated in Vancouver, it’s perfect for those who want to hit the books and the beach on the same day.</p>
        <h1 className='RecentNews_heading'>3. McGill University</h1>
        <p>In the heart of Montreal, McGill is the Hogwarts of Canada. Apart from its distinguishable culture, it is the best place for international students because of its diversity. Immigrant students make up about 30% of the total student population. It’s prestigious, it’s historic, and it’s surrounded by the best food Canada has to offer.</p>
        <h1 className='RecentNews_heading'>4. McMaster University</h1>
        <p>Hamilton’s pride and joy, McMaster, is known for its health sciences and research prowess. Being located in a well funded province, researchers from all over the world come to McMaster for its state-of-the-art infrastructure. Furthermore, if you’re leaning towards understanding the complex human anatomy, this is the right university for you.</p>
        <h1 className='RecentNews_heading'>5. University of Alberta</h1>
        <p>Known for its innovative science programs, this Edmonton based university is one of the top teaching and research universities in Canada. If you're an extroverted winter fanatic, this is the place for you. With snowy weather and friendly faces, you can have the best college life here in the U of A.</p>
        <h1 className='RecentNews_heading'>6. University of Montreal</h1>
        <p>If you are interested in enhancing your vernacular and learning French, UdeM offers top-tier programs and a chance to immerse yourself in French-Canadian culture. Anglophones (English speaking population) might have trouble adjusting at first, but if you put in the effort, communicating with the francophones (French speaking population) will not be too difficult.</p>
      </div>
    </div>
    </div>
  )
}
