import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Lucide icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to download PDF
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/pdf/whitepaper.pdf'; // adjust the path based on your public folder structure
    link.download = 'BYOC-Whitepaper.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            onClick={downloadPDF}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            Download PDF
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-0 right-0 w-64 h-full bg-gray-900 text-white py-4 transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end px-4">
            <button className="text-white" onClick={toggleMenu}>
              <X size={32} />
            </button>
          </div>

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
      </nav>
    </>
  );
};

export default Navbar;
