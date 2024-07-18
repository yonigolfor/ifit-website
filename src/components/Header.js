import React from 'react';
import './Header.css';
// import model1 from '../images/model1.jpg';
import model2 from '../images/model2.jpg';

function Header() {
  return (
    <header className="header">
      <img src={model2} alt="iFit Logo" className="header-logo" />
      <div className='header-content'>
        <h1>iFit</h1>
        <p>עקוב אחר האימון - שתף עם חברים - תגיע להישגים</p>
      </div>
    </header>
  );
}

export default Header;