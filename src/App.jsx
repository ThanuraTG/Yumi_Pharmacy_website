import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrescriptionModal from './components/PrescriptionModal';
import SearchModal from './components/SearchModal';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import PharmacistsPage from './pages/PharmacistsPage';
import MembershipPage from './pages/MembershipPage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import ContactUsPage from './pages/ContactUsPage';
import { ArrowUp, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [prescriptionModalOpen, setPrescriptionModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'prod-1',
      name: 'Multivitamin Complex 60 Caps',
      price: 18.50,
      quantity: 1,
      image: '/images/shelves-with-medications-at-a-modern-pharmacy-shop.jpg'
    }
  ]);
  const [toastMessage, setToastMessage] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to cart`);
  };

  const updateQuantity = (id, newQty) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-pharmacy-textMuted font-sans relative">
      {/* Toast Notification with Slide In Up */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-pharmacy-secondary text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-2.5 border border-pharmacy-teal/40 animate-slide-in-up text-sm font-semibold">
          <CheckCircle2 size={18} className="text-pharmacy-teal" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Back to Top Button with Slide In Up & Hover Transition */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-pharmacy-teal hover:bg-pharmacy-primary text-white p-3 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-up btn-hover-effect"
          title="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        openSearchModal={() => setSearchModalOpen(true)}
      />

      {/* Dynamic Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            setCurrentPage={setCurrentPage}
            openPrescriptionModal={() => setPrescriptionModalOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutUs
            setCurrentPage={setCurrentPage}
            openPrescriptionModal={() => setPrescriptionModalOpen(true)}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            setCurrentPage={setCurrentPage}
            openPrescriptionModal={() => setPrescriptionModalOpen(true)}
          />
        )}
        {currentPage === 'pharmacists' && (
          <PharmacistsPage
            setCurrentPage={setCurrentPage}
            openPrescriptionModal={() => setPrescriptionModalOpen(true)}
          />
        )}
        {currentPage === 'membership' && (
          <MembershipPage
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'shop' && (
          <ShopPage
            addToCart={addToCart}
            setCurrentPage={setCurrentPage}
            openPrescriptionModal={() => setPrescriptionModalOpen(true)}
          />
        )}
        {(currentPage === 'blog' || currentPage === 'single-post') && (
          <BlogPage
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'contact' && (
          <ContactUsPage
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Interactive Global Modals */}
      <PrescriptionModal
        isOpen={prescriptionModalOpen}
        onClose={() => setPrescriptionModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        setCurrentPage={setCurrentPage}
        addToCart={addToCart}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}

