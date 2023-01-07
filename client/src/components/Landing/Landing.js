import React, { useState, useEffect } from 'react'
import './Landing.css'

function Landing() {
  const [keyword, setContent] = useState('lending');
  const [opacity, setOpacity] = useState(1);
  let intervalId = null;
  console.log(intervalId);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setContent(keyword === 'lending' ? 'borrowing' : 'lending');
        setOpacity(1);
      }, 800);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [keyword, opacity]);
  return (
    <div>
      <main>
        <div className="content body">
          <h2>peer-to-peer <span style={{ opacity }} id="keyword">{keyword}</span> made easy</h2>
          <div id='lender' className='marketing'>
            <p>are you tired of low returns on your investments? lendify allows you to earn higher returns
               by directly investing in small businesses and individuals.</p>
            <button className="learn-more">learn more</button>
          </div>
          <div id='borrow' className='marketing'>
            <p >are you in need of affordable financing options? lednify connects you with
               lenders who are willing to invest in your goals.</p>
            <button className="learn-more">learn more</button>
          </div>
        </div>
      </main >
    </div >
  );
}

export default Landing;