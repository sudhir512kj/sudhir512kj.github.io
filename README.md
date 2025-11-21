# Sudhir Meena Portfolio

A modern, responsive portfolio website built with React and Material-UI to showcase skills, experience, and projects as a Java Backend Developer.

## Features

- Modern Material-UI design
- Responsive layout for all devices
- Interactive contact form with EmailJS integration
- Dynamic experience loading from JSON
- Professional project showcase
- Skills visualization with progress bars

## Technologies Used

- React 18
- Material-UI (MUI)
- EmailJS for contact form
- Three.js for 3D effects (optional)

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure EmailJS and Stripe (see below)
4. Start development server: `npm start`

## EmailJS Configuration

To enable recruiters to send you emails via the contact form:

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail recommended)
3. Create an email template with these variables:
   ```
   To: sureshmeena512@gmail.com
   From: {{from_name}} <noreply@emailjs.com>
   Reply-To: {{reply_to}}
   Subject: {{subject}}
   
   New message from your portfolio:
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your EmailJS credentials to `.env`
   - For GitHub Pages deployment, add these as GitHub Secrets:
     - `REACT_APP_EMAILJS_SERVICE_ID`
     - `REACT_APP_EMAILJS_TEMPLATE_ID`
     - `REACT_APP_EMAILJS_PUBLIC_KEY`

5. For GitHub Actions deployment, update your workflow to use secrets:
   ```yaml
   - name: Build
     run: npm run build
     env:
       REACT_APP_EMAILJS_SERVICE_ID: ${{ secrets.REACT_APP_EMAILJS_SERVICE_ID }}
       REACT_APP_EMAILJS_TEMPLATE_ID: ${{ secrets.REACT_APP_EMAILJS_TEMPLATE_ID }}
       REACT_APP_EMAILJS_PUBLIC_KEY: ${{ secrets.REACT_APP_EMAILJS_PUBLIC_KEY }}
       REACT_APP_STRIPE_PUBLISHABLE_KEY: ${{ secrets.REACT_APP_STRIPE_PUBLISHABLE_KEY }}
   ```

## Stripe Configuration

To enable direct payments for mentorship sessions:

1. Create account at [Stripe](https://stripe.com/)
2. Get your publishable and secret keys from the dashboard
3. Add to environment variables:
   - `REACT_APP_STRIPE_PUBLISHABLE_KEY` (starts with pk_)
   - `STRIPE_SECRET_KEY` (starts with sk_) - for serverless function
4. Deploy the API endpoint (`/api/create-checkout-session.js`) to Vercel or similar platform
5. Update Topmate and GeeksforGeeks profile links in the mentorship component

## Mentorship Features

- **Platform Integration**: Direct links to Topmate and GeeksforGeeks Expert profiles
- **Direct Payment**: Stripe integration for immediate booking and payment
- **Multiple Plans**: Basic (30min), Standard (60min), Premium (90min) consultation options
- **Responsive Design**: Works seamlessly on all devices

## Deployment

```bash
npm run build
npm run deploy
```

## License

MIT License