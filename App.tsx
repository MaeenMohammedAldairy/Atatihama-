
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Goals from './pages/Goals.tsx';
import Projects from './pages/Projects.tsx';
import News from './pages/News.tsx';
import Contact from './pages/Contact.tsx';
import Donations from './pages/Donations.tsx';
import Membership from './pages/Membership.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#fcfcfc]">
        <Navbar />
        <main className="flex-grow pt-[100px] md:pt-[120px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/achievements" element={<Projects />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;