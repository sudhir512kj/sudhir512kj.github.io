import React, { useState, useEffect } from 'react';

const Mentorship = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Stripe is enabled for test when REACT_APP_ENV is set to 'development'
  const isDev = process.env.REACT_APP_ENV === 'development';

  const mentorshipPlans = [
    {
      id: 'basic',
      name: 'Basic Consultation',
      price: 999,
      duration: '30 minutes',
      features: ['Career guidance', 'Resume review', 'Interview tips']
    },
    {
      id: 'standard',
      name: 'Standard Mentorship',
      price: 1999,
      duration: '60 minutes',
      features: ['Technical interview prep', 'System design basics', 'Project guidance', 'Career roadmap']
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 2999,
      duration: '90 minutes',
      features: ['Complete interview prep', 'System design deep dive', 'Mock interviews', 'Long-term mentorship']
    }
  ];

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleStripePayment = async (plan) => {
    if (isDev) {
      try {
        const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
        
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ planId: plan.id, amount: plan.price })
        });
        
        const session = await response.json();
        await stripe.redirectToCheckout({ sessionId: session.id });
      } catch (error) {
        console.error('Payment error:', error);
        setAlertMessage('Payment failed. Please try again.');
        setShowAlert(true);
      }
    } else {
      setAlertMessage('This feature is currently in progress. Contact me via contact form');
      setShowAlert(true);
    }
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-6 right-6 bg-yellow-900 border-2 border-yellow-500 rounded-lg p-4 max-w-sm animate-in slide-in-from-right duration-300 z-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white font-semibold">Feature in Progress</p>
              <p className="text-gray-200 text-sm">{alertMessage} <a href="/#contact" className="text-yellow-300 hover:underline font-semibold">contact form</a></p>
            </div>
            <button
              onClick={() => setShowAlert(false)}
              className="text-white hover:text-gray-300 text-2xl ml-4 -mt-1"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="sticky top-16 z-40 bg-slate-800 border-b border-slate-700 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap text-sm md:text-base">
            <a href="#mentorship" className="text-gray-300 hover:text-blue-400 transition-colors">Plans</a>
            <a href="#cancellation" className="text-gray-300 hover:text-blue-400 transition-colors">Cancellation</a>
            <a href="#terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms</a>
            <a href="#shipping" className="text-gray-300 hover:text-blue-400 transition-colors">Shipping</a>
            <a href="#privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy</a>
          </div>
        </div>
      </div>

      <section id="mentorship" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mentorship & Consultation</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get personalized guidance from an experienced Java Backend Developer.
              Book sessions through multiple platforms or pay directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Topmate</h3>
                  <p className="text-gray-400">Professional mentorship platform</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Book 1-on-1 sessions for career guidance, technical interviews, and system design discussions.
              </p>
              <a
                href="https://topmate.io/sudhir_meena"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book on Topmate
              </a>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">GeeksforGeeks Expert</h3>
                  <p className="text-gray-400">Technical mentorship platform</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Get expert guidance on DSA, system design, and technical interview preparation.
              </p>
              <a
                href="https://www.geeksforgeeks.org/mentorship/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Book on GeeksforGeeks
              </a>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Direct Payment Plans</h3>
            <p className="text-gray-300">Pay directly and schedule sessions via email or WhatsApp</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-slate-800 p-8 rounded-xl border transition-all cursor-pointer ${selectedPlan?.id === plan.id
                  ? 'border-blue-500 ring-2 ring-blue-500/20'
                  : 'border-slate-700 hover:border-slate-600'
                  }`}
                onClick={() => setSelectedPlan(plan)}
              >
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="text-3xl font-bold text-blue-400 mb-2">₹{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.duration} session</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStripePayment(plan);
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Pay with Stripe
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              After payment, you will receive booking instructions via email.
            </p>
            <p className="text-gray-300">
              Questions? Contact me at{' '}
              <a href="mailto:sudhirmeena230995@gmail.com" className="text-blue-400 hover:underline">
                sudhirmeena230995@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="cancellation" className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Cancellation & Refunds</h2>
          <div className="text-gray-300 space-y-4">
            <p>We understand that plans can change. Our cancellation and refund policy is as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made 24 hours before the scheduled session are eligible for a full refund.</li>
              <li>Cancellations made less than 24 hours before the session will receive a 50% refund.</li>
              <li>No-shows without prior notice are not eligible for refunds.</li>
              <li>Refunds will be processed within 5-7 business days to the original payment method.</li>
              <li>To request a cancellation, email us at sudhirmeena230995@gmail.com with your booking details.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="terms" className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Terms and Conditions</h2>
          <div className="text-gray-300 space-y-4">
            <p>By booking a mentorship session, you agree to the following terms:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sessions are conducted online via video call (Google Meet/Zoom).</li>
              <li>You must be punctual for your scheduled session. Late arrivals will not extend the session time.</li>
              <li>Recording of sessions is not permitted without prior written consent.</li>
              <li>All content shared during sessions is confidential and for personal use only.</li>
              <li>We reserve the right to cancel or reschedule sessions due to unforeseen circumstances.</li>
              <li>Payment must be completed before the session is confirmed.</li>
              <li>You are responsible for ensuring a stable internet connection during the session.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="shipping" className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Shipping</h2>
          <div className="text-gray-300 space-y-4">
            <p>As our mentorship services are delivered digitally, there is no physical shipping involved.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session details and meeting links will be sent via email within 24 hours of payment confirmation.</li>
              <li>Any study materials or resources will be shared digitally during or after the session.</li>
              <li>Ensure your email address is correct at the time of booking to receive all communications.</li>
              <li>Check your spam folder if you don't receive confirmation within 24 hours.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="privacy" className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Privacy Policy</h2>
          <div className="text-gray-300 space-y-4">
            <p>Your privacy is important to us. This policy outlines how we handle your information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We collect only necessary information: name, email, and payment details for booking purposes.</li>
              <li>Payment information is processed securely through Stripe and is not stored on our servers.</li>
              <li>Your personal information will not be shared with third parties except as required for service delivery.</li>
              <li>Session content and discussions remain confidential between you and the mentor.</li>
              <li>We may use your email to send booking confirmations and session-related communications.</li>
              <li>You can request deletion of your data by contacting us at sudhirmeena230995@gmail.com.</li>
              <li>We use industry-standard security measures to protect your information.</li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-in {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Mentorship;
