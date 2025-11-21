import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/mentorship');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (success) {
    return (
      <section className="min-h-screen bg-slate-900 flex items-center justify-center py-20">
        <div className="max-w-md w-full bg-slate-800 p-8 rounded-xl border border-green-500 text-center">
          <div className="text-6xl text-green-400 mb-4">✓</div>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-gray-300 mb-6">
            Thank you for your payment. You will receive booking instructions via email shortly.
          </p>
          <p className="text-gray-400 text-sm">Redirecting to mentorship page in 5 seconds...</p>
          <button
            onClick={() => navigate('/mentorship')}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Go Back Now
          </button>
        </div>
      </section>
    );
  }

  if (canceled) {
    return (
      <section className="min-h-screen bg-slate-900 flex items-center justify-center py-20">
        <div className="max-w-md w-full bg-slate-800 p-8 rounded-xl border border-red-500 text-center">
          <div className="text-6xl text-red-400 mb-4">✕</div>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Cancelled</h1>
          <p className="text-gray-300 mb-6">
            Your payment was cancelled. No charges have been made to your account.
          </p>
          <p className="text-gray-400 text-sm">Redirecting to mentorship page in 5 seconds...</p>
          <button
            onClick={() => navigate('/mentorship')}
            className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Go Back Now
          </button>
        </div>
      </section>
    );
  }

  return null;
};

export default PaymentStatus;
