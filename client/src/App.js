import { useState } from 'react';

// Component Imports
import Footer from './components/Footer';
import Header from './components/Header'

// Page imports
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';




function App() {

  const [page, setPage] = useState('about');

  const handlePageView = () => {


    switch (page) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Portfolio />
    }
  }
  return (
    <>
      <Header page={page} setPage={setPage} />

      {handlePageView()}

      <Footer />
    </>
  );
}

export default App;
