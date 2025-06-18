// Caminho: src/App.jsx

import React, { useState, useEffect, useRef } from 'react';

// Importando todos os seus componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import WhyChooseUs from './components/WhyChooseUs';
import ImageSection from './components/ImageSection';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Support from './components/Support';
import Faq from './components/Faq';
import SpeedTest from './components/SpeedTest';
import CentralAssinante from './components/CentralAssinante';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import SolicitationForm from './components/SolicitationForm'; // <-- IMPORTANTE: Novo componente de formulário

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  // Refs para cada seção
  const homeRef = useRef(null);
  const plansRef = useRef(null);
  const videoRef = useRef(null);
  const supportRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const centralRef = useRef(null);
  const solicitationRef = useRef(null); // <-- IMPORTANTE: NOVA REF PARA O FORMULÁRIO
  
  // Agrupando as refs para facilitar a observação
  const sectionRefs = [
    { id: 'home', ref: homeRef },
    { id: 'plans-section', ref: plansRef },
    { id: 'video-section', ref: videoRef },
    { id: 'support-section', ref: supportRef },
    { id: 'about', ref: aboutRef },
    { id: 'contact', ref: contactRef },
    { id: 'central-assinante', ref: centralRef },
    { id: 'solicitation-form', ref: solicitationRef }, // <-- IMPORTANTE: ADICIONANDO A NOVA REF AQUI
  ];

  // Efeito para o loading inicial e para observar as seções
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } 
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Função de limpeza
    return () => {
      clearTimeout(timer);
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Dependências ajustadas se necessário, para garantir que observe apenas uma vez ou reaja a mudanças controladas

  return (
    <div className="w-full bg-blue-950">
      <ThemeToggle />
      <Navbar 
        refs={{ homeRef, plansRef, videoRef, supportRef, aboutRef, contactRef, centralRef, solicitationRef }} // <-- IMPORTANTE: PASSE A NOVA REF PARA A NAVBAR
        activeSection={activeSection} 
      />
      <div className="relative z-10">
        <Hero ref={homeRef} loading={loading} scrollToPlans={() => plansRef.current.scrollIntoView({ behavior: 'smooth' })} />
        <Plans ref={plansRef} loading={loading} />
        <WhyChooseUs loading={loading} />
        <ImageSection loading={loading} />
        <VideoSection ref={videoRef} loading={loading} />
        <Testimonials loading={loading} />
        <About ref={aboutRef} loading={loading} />
        <Contact ref={contactRef} loading={loading} />
        <Support ref={supportRef} loading={loading} />
        <Faq loading={loading} />
        <SpeedTest />
        <CentralAssinante ref={centralRef} loading={loading} />
        <SolicitationForm ref={solicitationRef} /> {/* <-- IMPORTANTE: RENDERIZE O NOVO COMPONENTE AQUI */}
      </div>
      <Footer />
    </div>
  );
}

export default App;