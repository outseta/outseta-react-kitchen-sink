# Outseta React Kitchen Sink

This project provides an overview of the multiple ways to integrate the Outseta embeds with React. It's designed as a reference implementation showing various Outseta embed implementations and integration patterns.

## What is a Kitchen Sink?

A "kitchen sink" provides comprehensive examples of how to use a technology. It's not intended to be a starting point for new projects.

If you're looking for a starting point for a new project, check out the [Outseta React Starter](https://github.com/outseta/outseta-react-starter).

## Running Locally

1. Clone the repository

```bash
git clone https://github.com/outseta/outseta-react-kitchen-sink.git
cd outseta-react-kitchen-sink
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables
   Create a `.env` file in the root directory with the following variables:

```env
VITE_OUTSETA_DOMAIN=your-domain.outseta.com
VITE_OUTSETA_ADD_ON_UIDS=uid1,uid2
VITE_OUTSETA_LEAD_CAPTURE_UID=uid1,uid2
VITE_OUTSETA_EMAIL_LIST_UIDS=uid1,uid2
```

- `VITE_OUTSETA_DOMAIN`: Your Outseta domain
- `VITE_OUTSETA_ADD_ON_UIDS`: Comma-separated UIDs for add-on products
- `VITE_OUTSETA_LEAD_CAPTURE_UID`: Comma-separated UIDs for lead capture forms
- `VITE_OUTSETA_EMAIL_LIST_UIDS`: Comma-separated UIDs for email lists

4. Start the development server

```bash
npm run dev
```

## Features Demonstrated

The project includes examples for:

- Auth Embed (Signup, Login, Combined Signup/Login)
- Profile Embed (Billing, Profile, Account)
- Profile Embed (Buy Add On)
- Lead Capture Embed
- Email List Embed
- Protected Content
- Logout Functionality

## Relevant Outseta Docs

- [JavaScript Configuration Guide](https://go.outseta.com/support/kb/articles/aWxXddWV/javascript-configuration-guide)[[LLM Version](https://go.outseta.com/support/docs/articles/aWxXddWV/javascript-configuration-guide)]
- [Outseta Embed API Documentation](https://go.outseta.com/support/kb/articles/79OjwGQE/outseta-embed-api)[[LLM Version](https://go.outseta.com/support/docs/articles/79OjwGQE/outseta-embed-api)]

## Technology Stack

- React
- Vite
- React Router
- Outseta Embed API
