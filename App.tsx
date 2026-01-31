import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Publications from './pages/Publications';
import CV from './pages/CV';
import SearchModal from './components/SearchModal';
import { AnimatePresence } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar onSearchClick={() => setIsSearchOpen(true)} />
        <main className="flex-grow w-full max-w-5xl mx-auto px-6">
          <AnimatedRoutes />
        </main>
        <Footer />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </div>
    </HashRouter>
  );
};

export default App;