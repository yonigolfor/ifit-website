import React from 'react';
import './Header.css';
// import model1 from '../images/model1.jpg';
// import model2 from '../images/model2.jpg';
import iFit from '../images/iFit.png';


function Header() {
  return (
    <header className="header">
      <img src={iFit} alt="iFit Logo" className="header-logo" />
      <div className='header-content' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', overflow: 'hidden', flexDirection: 'column' }}>
        <h1>iFit App</h1>
        <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: '1 1 auto', maxWidth: '100%', margin: '0' }}>עקוב אחר האימון - שתף עם חברים - תגיע להישגים</p>
      </div>
    </header>
  );
}

export default Header;