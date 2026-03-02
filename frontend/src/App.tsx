import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import BookingContact from './components/BookingContact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [showAdmin, setShowAdmin] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('admin') === 'true';
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onAdminClick={() => setShowAdmin(true)} />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Gallery />
        <BookingContact />
      </main>
      <Footer />
      {showAdmin && <AdminDashboard onClose={() => setShowAdmin(false)} />}
    </div>
  );
}

export default App;
