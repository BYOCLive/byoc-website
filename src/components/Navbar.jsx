import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/pdf/BYOCWhitepaper.pdf';
    link.download = 'BYOC.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#141821] text-white shadow-md">
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        <a href="/">
          <div className="text-2xl font-bold">BYOC</div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#ecosystem" className="hover:text-purple-400 transition-colors">Ecosystem</a>
          <a href="#token" className="hover:text-purple-400 transition-colors">Token</a>
          <a href="#roadmap" className="hover:text-purple-400 transition-colors">Roadmap</a>
          <button 
            onClick={downloadPDF}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            Download PDF
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-40 p-6 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-6">
          <button onClick={toggleMenu}>
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col items-start gap-6">
          <a href="#ecosystem" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">
            Ecosystem
          </a>
          <a href="#token" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">
            Token
          </a>
          <a href="#roadmap" onClick={toggleMenu} className="hover:text-purple-400 transition-colors">
            Roadmap
          </a>
          <button
            onClick={() => {
              toggleMenu();
              downloadPDF();
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* Backdrop (optional for clicking outside to close) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
