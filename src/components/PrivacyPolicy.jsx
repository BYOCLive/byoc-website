import { useState } from 'react';

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-grid-pattern relative">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-0 left-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-15" />
      <div className="absolute top-1/2 right-1/4 h-32 w-32 bg-teal-400 rounded-full blur-2xl opacity-10" />

      {/* Header */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-30 blur-md"></div>
              <div className="relative w-full h-full rounded-full border-2 border-teal-400 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-500">
            BYOC Token Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your privacy and data protection are our top priorities. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <div className="mb-8">
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-6 0v4"></path>
                    <rect x="2" y="9" width="20" height="11" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Introduction</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy outlines how BYOC collects, uses, and protects user data in compliance with applicable laws and regulations. BYOC is a digital token built on web3 technology and is used for various use cases in gaming, finance, artificial intelligence, and consumer products. By using BYOC, you agree to the terms of this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Data Collection Section */}
          <div className="mb-8">
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Data Collection</h2>
              </div>
              <p className="text-gray-300 mb-4">BYOC collects the following types of data:</p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">1. User-Provided Data</h3>
                  <p className="text-gray-300 mb-2">Users may provide personal data, such as:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>- Contact information: email address, phone number, or other contact details.</li>
                    <li>- Identification documents: government-issued IDs, passports, or other identification documents for Know-Your-Customer (KYC) or Anti-Money Laundering (AML) compliance.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-teal-400 pl-4">
                  <h3 className="text-lg font-bold text-teal-400 mb-2">2. Transaction Data</h3>
                  <p className="text-gray-300 mb-2">BYOC collects transaction data, including:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>- Transaction records: sender and recipient wallet addresses, transaction amounts, and timestamps.</li>
                    <li>- Smart contract data: contract address, function calls, and execution results.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-pink-500 pl-4">
                  <h3 className="text-lg font-bold text-pink-400 mb-2">3. Usage Data</h3>
                  <p className="text-gray-300 mb-2">BYOC collects usage data, including:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>- Information about user interactions with the platform, such as page views, clicks, and transactions.</li>
                    <li>- Device and browser information: IP address, device type, browser type, and operating system.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-purple-600 pl-4">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">4. Community Data</h3>
                  <p className="text-gray-300 mb-2">BYOC collects data about user interactions within communities, including:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>- Community membership and participation.</li>
                    <li>- User-generated content, such as posts, comments, and reviews.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Use Section */}
          <div className="mb-8">
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Data Use</h2>
              </div>
              <p className="text-gray-300 mb-4">BYOC uses collected data for the following purposes:</p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">1. Token Functionality</h3>
                  <p className="text-gray-300">BYOC uses transaction data to facilitate transactions, smart contract execution, and other core functionalities.</p>
                </div>

                <div className="border-l-2 border-teal-400 pl-4">
                  <h3 className="text-lg font-bold text-teal-400 mb-2">2. Platform Improvement</h3>
                  <p className="text-gray-300">BYOC uses usage data to improve the platform's functionality, user experience, and overall performance.</p>
                </div>

                <div className="border-l-2 border-pink-500 pl-4">
                  <h3 className="text-lg font-bold text-pink-400 mb-2">3. Community Management</h3>
                  <p className="text-gray-300">BYOC uses community data to manage and moderate communities, including enforcing community rules and guidelines.</p>
                </div>

                <div className="border-l-2 border-purple-600 pl-4">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">4. Marketing and Advertising</h3>
                  <p className="text-gray-300 mb-2">BYOC may use user data for marketing and advertising purposes, including:</p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>- Personalized advertising: BYOC may use user data to deliver personalized ads and content.</li>
                    <li>- Market research: BYOC may use user data for market research and analysis.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection Section */}
          <div className="mb-8">
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Data Protection</h2>
              </div>
              <p className="text-gray-300 mb-4">BYOC implements robust security measures to protect user data, including:</p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">1. Encryption</h3>
                  <p className="text-gray-300">BYOC uses end-to-end encryption to secure data in transit and at rest.</p>
                </div>

                <div className="border-l-2 border-teal-400 pl-4">
                  <h3 className="text-lg font-bold text-teal-400 mb-2">2. Access Controls</h3>
                  <p className="text-gray-300">BYOC implements strict access controls to ensure that only authorized personnel can access user data.</p>
                </div>

                <div className="border-l-2 border-pink-500 pl-4">
                  <h3 className="text-lg font-bold text-pink-400 mb-2">3. Regular Audits</h3>
                  <p className="text-gray-300">BYOC conducts regular security audits to identify and address potential vulnerabilities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Rights Section */}
          <div className="mb-8">
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="m22 2-5 10-5-5 10-5z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">User Rights</h2>
              </div>
              <p className="text-gray-300 mb-4">Users have the following rights:</p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">1. Data Access</h3>
                  <p className="text-gray-300">Users can access their transaction history and account information.</p>
                </div>

                <div className="border-l-2 border-teal-400 pl-4">
                  <h3 className="text-lg font-bold text-teal-400 mb-2">2. Data Correction</h3>
                  <p className="text-gray-300">Users can correct errors or inaccuracies in their provided data.</p>
                </div>

                <div className="border-l-2 border-pink-500 pl-4">
                  <h3 className="text-lg font-bold text-pink-400 mb-2">3. Data Deletion</h3>
                  <p className="text-gray-300">Users can request data deletion, subject to applicable laws and regulations.</p>
                </div>

                <div className="border-l-2 border-purple-600 pl-4">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">4. Opt-out</h3>
                  <p className="text-gray-300">Users can opt-out of marketing and advertising communications.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Agentic AI Applications */}
          <div className="mb-8">
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="8" r="7"></circle>
                    <circle cx="16" cy="16" r="7"></circle>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Agentic AI Applications</h2>
              </div>
              <p className="text-gray-300 mb-4">BYOC's agentic AI applications may collect additional data, including:</p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">1. Product Data</h3>
                  <p className="text-gray-300">BYOC may collect data about products created and sold on the platform, including product descriptions, pricing, and images.</p>
                </div>

                <div className="border-l-2 border-teal-400 pl-4">
                  <h3 className="text-lg font-bold text-teal-400 mb-2">2. User Interaction Data</h3>
                  <p className="text-gray-300">BYOC may collect data about user interactions with agentic AI applications, including usage patterns and feedback.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marketplace */}
          <div className="mb-8">
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18l-1 13H4L3 3z"></path>
                    <path d="M16 13v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Marketplace</h2>
              </div>
              <p className="text-gray-300 mb-4">BYOC's marketplace may collect additional data, including:</p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">1. Product Listings</h3>
                  <p className="text-gray-300">BYOC may collect data about product listings, including product descriptions, pricing, and images.</p>
                </div>

                <div className="border-l-2 border-teal-400 pl-4">
                  <h3 className="text-lg font-bold text-teal-400 mb-2">2. Transaction Data</h3>
                  <p className="text-gray-300">BYOC may collect transaction data, including buyer and seller information, transaction amounts, and timestamps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="space-y-6">
            {/* Cookies and Tracking */}
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">Cookies and Tracking</h2>
              <p className="text-gray-300">
                BYOC may use cookies and tracking technologies to collect usage data and improve the user experience. Users can manage their cookie preferences through their browser settings.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">Third-Party Services</h2>
              <p className="text-gray-300">
                BYOC may integrate third-party services, such as wallet providers or exchanges, which may collect user data. Users should review the privacy policies of these third-party services.
              </p>
            </div>

            {/* Changes to this Policy */}
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">Changes to this Policy</h2>
              <p className="text-gray-300">
                BYOC reserves the right to update this Privacy Policy to reflect changes in applicable laws, regulations, or industry standards. Users will be notified of any material changes to this Policy.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
                <a href="mailto:coin@byoc.live" className="text-purple-400 hover:text-purple-300 transition-colors">
                  coin@byoc.live
                </a>
              </p>
            </div>

            {/* Appendix */}
            <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">Appendix</h2>
              <ul className="text-gray-300 space-y-2">
                <li>- <strong>Data Retention Policy</strong>: BYOC will retain user data for as long as necessary to fulfill the purposes outlined in this Privacy Policy.</li>
                <li>- <strong>Data Protection Officer</strong>: BYOC's data protection officer can be contacted at coin@byoc.live</li>
              </ul>
            </div>

            {/* Acknowledgment */}
            <div className="bg-gradient-to-r from-purple-600/20 via-teal-400/20 to-pink-500/20 border border-gray-700 rounded-xl p-6">
              <p className="text-gray-300">
                By using BYOC, you acknowledge that you have read and understood this Privacy Policy. If you do not agree to this Privacy Policy, please do not use BYOC.
              </p>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="mt-12 w-full h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;