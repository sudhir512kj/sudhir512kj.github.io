const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/create-razorpay-order', async (req, res) => {
  try {
    const { amount, planId } = req.body;
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt: `receipt_${planId}_${Date.now()}`,
      notes: { planId },
    });

    res.json(order);
  } catch (error) {
    console.error('Razorpay error:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { planId, amount } = req.body;
    console.log('Creating Stripe session for:', { planId, amount });
    
    const planNames = {
      basic: 'Basic Consultation (30 min)',
      standard: 'Standard Mentorship (60 min)',
      premium: 'Premium Package (90 min)'
    };

    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: planNames[planId] || 'Mentorship Session',
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:3000/payment-status?success=true&session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/payment-status?canceled=true',
    });

    console.log('Stripe session created:', session.id);
    res.json({ id: session.id });
  } catch (error) {
    console.error('Stripe error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
