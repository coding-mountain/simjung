
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AscentPage from './pages/AscentPage';
import InquiryPage from './pages/InquiryPage';
import ContactPage from './pages/ContactPage';
import InitiatePage from './pages/InitiatePage';
import { Mountain } from 'lucide-react';

export type PageType = 'home' | 'ascent' | 'inquiry' | 'contact' | 'initiate' | '404';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const navigateTo = (page: PageType, serviceId: string | null = null) => {
    if (page === currentPage && serviceId === selectedService) return;
    
    setCurrentPage(page);
    setSelectedService(serviceId);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'ascent':
        return <AscentPage navigateTo={navigateTo} />;
      case 'inquiry':
        return <InquiryPage selectedService={selectedService} navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      case 'initiate':
        return <InitiatePage navigateTo={navigateTo} />;
      case '404':
        return (
          <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center">
             <Mountain className="w-24 h-24 text-rose-100 mb-8" />
             <h1 className="text-8xl font-black text-[#1E1B4B] mb-4">404</h1>
             <h2 className="text-2xl font-serif italic text-slate-400 mb-12">You've lost the trail.</h2>
             <button 
                onClick={() => navigateTo('home')}
                className="px-12 py-5 bg-[#1E1B4B] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-orchid transition-all"
             >
                Return to Base Camp
             </button>
          </div>
        );
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
