import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ plan, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 p-8 rounded-xl max-w-md w-full">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-300 mb-6">Amount: ₹{plan.price}</p>
        
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          {error && <p className="text-red-400 mt-4">{error}</p>}
          
          <div className="flex gap-4 mt-6">
            <button type="button" onClick={onClose} className="flex-1 bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-600">
              Cancel
            </button>
            <button type="submit" disabled={!stripe || loading} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50">
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PaymentModal = ({ plan, onClose }) => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId: plan.id, amount: plan.price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [plan]);

  return clientSecret ? (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm plan={plan} onClose={onClose} />
    </Elements>
  ) : null;
};

const Mentorship = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

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

  return (
    <>
      {selectedPlan && <PaymentModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
      
      {showAlert && (
        <div className="fixed top-6 right-6 bg-yellow-900 border-2 border-yellow-500 rounded-lg p-4 max-w-sm animate-in slide-in-from-right duration-300 z-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white font-semibold">Feature in Progress</p>
              <p className="text-gray-200 text-sm">{alertMessage} <a href="/#contact" className="text-yellow-300 hover:underline font-semibold">contact form</a></p>
            </div>
            <button onClick={() => setShowAlert(false)} className="text-white hover:text-gray-300 text-2xl ml-4 -mt-1">×</button>
          </div>
        </div>
      )}

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
              <a href="https://topmate.io/sudhir_meena" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
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
              <a href="https://www.geeksforgeeks.org/mentorship/" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
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
              <div key={plan.id} className={`bg-slate-800 p-8 rounded-xl border transition-all cursor-pointer ${selectedPlan?.id === plan.id ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700 hover:border-slate-600'}`} onClick={() => setSelectedPlan(plan)}>
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

                <button onClick={(e) => { e.stopPropagation(); setSelectedPlan(plan); }} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Pay with Stripe
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">After payment, you will receive booking instructions via email.</p>
            <p className="text-gray-300">
              Questions? Contact me at <a href="mailto:sudhirmeena230995@gmail.com" className="text-blue-400 hover:underline">sudhirmeena230995@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(400px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-in { animation: slideInRight 0.3s ease-out; }
      `}</style>
    </>
  );
};

export default Mentorship;
