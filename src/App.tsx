import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Opportunities from './components/Opportunities';
import Process from './components/Process';
import Stats from './components/Stats';
import Stories from './components/Stories';
import FAQ from './components/FAQ';
import ApplicationForm from './components/ApplicationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Opportunities />
        <Process />
        <Stats />
        <Stories />
        <FAQ />
        <ApplicationForm />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default App;
