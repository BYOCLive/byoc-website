import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#141821] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Logo and Branding */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">BYOC</h2>
            <p className="text-gray-400 mb-6">
              Building the future of AI & blockchain ecosystems, 
              empowering creators and communities in the new digital 
              economy.
            </p>
            {/* Instagram Link Only */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/byocislive/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Ecosystem Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Ecosystem</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketplace</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Token Utility</a></li>
              <li><a href="#oldroadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Column 3: Resources Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row md:justify-between text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            © 2025 BYOC. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/termsandconditions" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/legalpolicy" className="hover:text-white transition-colors">Legal Policy</a>
            <a href="/cancellationpolicy" className="hover:text-white transition-colors">Cancellation Policy</a>
            <a href="/shippingpolicy" className="hover:text-white transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;