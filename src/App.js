import './App.css';

import Header from './components/Header';
import Description from './components/Description';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Description />
        <Gallery />
      </div>
      <ContactForm />
    </div>
  );
}


export default App;
