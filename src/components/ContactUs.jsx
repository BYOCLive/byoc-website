import React, { useState } from "react";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const API_BASE = 'https://byoc-backend-xemb.onrender.com/api';

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSubmitted(false);
    
    try {
      const res = await fetch(`${API_BASE}/form/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900 bg-grid-pattern">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300 mb-12">
          Get in touch with us! We're here to help.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm text-left"
        >
          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={5}
              placeholder="Your message..."
              required
            />
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="text-green-400 text-center mb-4 font-semibold">
              ✅ Your message has been sent successfully!
            </div>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-400 mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded hover:opacity-90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        <p className="text-gray-400 mt-8">
          Alternatively, you can email us directly at{" "}
          <a href="mailto:coin@byoc.live" className="text-white font-medium">coin@byoc.live</a>
          <br />
          We'd love to hear from you! Our team will respond to your inquiry as soon as possible. <br/>
          <strong>Current Address:</strong> Block 1-A, Sobha Ruby Platinum, Nagasandra, Bangalore 560073,Karnataka
        </p>
      </div>
    </section>
  );
};

export default ContactUsSection;