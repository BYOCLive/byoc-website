import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import Lucide icons
import { WaitlistPopupForm } from './WaitlistPopupForm'; // Import Waitlist Popup Form

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false); // Waitlist popup state

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-[#141821] text-white relative">
        <div className="text-2xl font-bold">BYOC</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#ecosystem" className="hover:text-purple-400 transition-colors">Ecosystem</a>
          <a href="#token" className="hover:text-purple-400 transition-colors">Token</a>
          <a href="#roadmap" className="hover:text-purple-400 transition-colors">Roadmap</a>
          <button 
            onClick={() => setShowWaitlistPopup(true)} // Show waitlist popup on click
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            Join Waitlist
          </button>
        </div>

        {/* Hamburger Icon (Visible on mobile) */}
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={32} className="text-white" /> // Close Icon
            ) : (
              <Menu size={32} className="text-white" /> // Hamburger Icon
            )}
          </button>
        </div>

        {/* Mobile Navigation (Sidebar that slides in from the right) */}
        <div
          className={`md:hidden fixed top-0 right-0 w-64 h-full bg-gray-900 text-white py-4 transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button inside the Sidebar */}
          <div className="flex justify-end px-4">
            <button className="text-white" onClick={toggleMenu}>
              <X size={32} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-4">
            <a href="#ecosystem" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>
              Ecosystem
            </a>
            <a href="#token" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>
              Token
            </a>
            <a href="#roadmap" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>
              Roadmap
            </a>
            <button 
              onClick={() => setShowWaitlistPopup(true)} // Show waitlist popup on click
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Waitlist Popup Form */}
      <WaitlistPopupForm 
        isOpen={showWaitlistPopup} 
        onClose={() => setShowWaitlistPopup(false)} 
      />
    </>
  );
};

export default Navbar;
