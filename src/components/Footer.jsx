// Footer Component
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
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Column 2: Ecosystem Links */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Ecosystem</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Community App</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketplace</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Token Utility</a>
                </li>
                <li>
                  <a href="#oldroadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a>
                </li>
              </ul>
            </div>
  
            {/* Column 3: Resources Links */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Divider Line */}
          <div className="border-t border-gray-800 mb-8"></div>
  
          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row md:justify-between text-gray-500 text-sm">
            <div className="mb-4 md:mb-0">
              © 2025 BYOC. All rights reserved.
            </div>
            <div className="flex space-x-6">
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