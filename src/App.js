import './App.css';
import Header from './components/Header';
import Description from './components/Description';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


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
            </div>
          </div>
        } />
        
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  </Router>
  );
}


export default App;
