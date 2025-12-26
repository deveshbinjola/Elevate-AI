import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Philosophy from './components/Philosophy';
import WhatIDo from './components/WhatIDo';
import AuditDetail from './components/AuditDetail';
import LongGame from './components/LongGame';
import HowWeWork from './components/HowWeWork';
import Audience from './components/Audience';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import IntakeForm from './components/IntakeForm';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#FDFFFD]">
      <Header onOpenForm={openForm} />
      <main>
        <Hero onOpenForm={openForm} />
        <ProblemSection />
        <Philosophy />
        <WhatIDo />
        <AuditDetail onOpenForm={openForm} />
        <HowWeWork onOpenForm={openForm} />
        <LongGame />
        <Audience />
        <FinalCTA onOpenForm={openForm} />
      </main>
      <Footer />
      
      {isFormOpen && <IntakeForm onClose={closeForm} />}
    </div>
  );
};

export default App;