import './App.css';
import Header from './components/Header';
import Description from './components/Description';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TermsOfUse from './components/termsOfUse/termsOfUse';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div>
            <Header />
            <Gallery />
            <ContactForm />
            <Description />
            {/* Footer */}
            <div style={{ paddingBottom: "2px", backgroundColor: "black" }}>
              <Link to="/privacy-policy" style={{color: "whitesmoke"}}>Privacy Policy</Link>
              <Link to="/terms-of-use" style={{color: "whitesmoke", paddingLeft: '16px'}}>Terms Of Use</Link>
            </div>
          </div>
        } />
        
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        
      </Routes>
    </div>
  </Router>
  );
}


export default App;
