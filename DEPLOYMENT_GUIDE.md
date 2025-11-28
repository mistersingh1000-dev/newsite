# CodeCraft Marketing - Complete Deployment Guide

This guide will help you download, set up, and deploy the entire CodeCraft Marketing e-commerce platform.

## 📦 What's Included

### Source Code
- Complete HTML/CSS/JavaScript e-commerce website
- Admin dashboard for managing products and orders
- Supabase integration for backend
- 212 pre-loaded products

### Database
- All migrations in `supabase/migrations/`
- Product data export in `database-export/`
- Complete schema with RLS policies
- Storage bucket configuration

### Features
- Product catalog with search and filters
- Shopping cart functionality
- Manual payment verification system (UPI)
- Admin panel for product management
- Order management system
- Supabase Storage for images

## 🚀 Quick Start - Local Development

### Prerequisites
- Node.js (v16 or higher)
- Git
- A Supabase account (free tier is fine)

### Step 1: Download the Project

The entire project is in this directory:
```
/tmp/cc-agent/60663306/project/
```

Copy it to your local machine:
```bash
# Option 1: If using Git
git init
git add .
git commit -m "Initial commit"

# Option 2: Download as ZIP
# Simply copy the entire folder to your computer
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Supabase

1. **Create a Supabase Project**
   - Go to https://supabase.com
   - Click "New Project"
   - Choose organization and project name
   - Wait for project to be ready

2. **Get Your Credentials**
   - In Supabase Dashboard → Settings → API
   - Copy the Project URL
   - Copy the `anon` public key

3. **Update .env File**
   ```bash
   # Edit .env file
   VITE_SUPABASE_URL=your_project_url_here
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

### Step 4: Run Database Migrations

**Option A: Using Supabase Dashboard (Easiest)**

1. Go to Supabase Dashboard → SQL Editor
2. Open each migration file from `supabase/migrations/` folder
3. Copy and paste the SQL content
4. Click "Run"
5. Repeat for all migration files in order

**Option B: Using Supabase CLI**

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Push all migrations
supabase db push
```

### Step 5: Import Product Data

1. Go to Supabase Dashboard → SQL Editor
2. Open `database-export/products-data.sql`
3. Copy all content and paste in SQL Editor
4. Click "Run"

### Step 6: Start Development Server

```bash
npm run dev
```

Visit http://localhost:5173 to see your site!

## 🌐 Production Deployment

### Deploy to Netlify

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Deploy
   netlify deploy --prod --dir=dist
   ```

3. **Set Environment Variables**
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add `VITE_SUPABASE_URL`
   - Add `VITE_SUPABASE_ANON_KEY`

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Add Environment Variables**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add both Supabase variables

### Deploy to Custom Server

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload dist/ folder** to your web server

3. **Configure Web Server**
   - Point document root to `dist/` folder
   - Enable SPA routing (redirect all routes to index.html)

## 👤 Admin Setup

### Create First Admin User

1. Go to Supabase Dashboard → SQL Editor
2. Run this query (replace with your details):

```sql
-- Create admin user
INSERT INTO admins (email, password_hash, role)
VALUES (
  'admin@yoursite.com',
  crypt('your_secure_password', gen_salt('bf')),
  'super_admin'
);
```

3. Access admin panel at: `https://yoursite.com/admin/login.html`

## 📁 Project Structure

```
project/
├── index.html              # Homepage
├── products.html           # Product listing
├── product.html            # Product detail page
├── cart.html              # Shopping cart
├── checkout.html          # Checkout page
├── admin/                 # Admin panel
│   ├── login.html
│   ├── dashboard.html
│   ├── products.html
│   └── orders.html
├── assets/
│   ├── css/              # Stylesheets
│   └── js/               # JavaScript files
├── supabase/
│   └── migrations/       # Database migrations
├── database-export/      # Database backup
├── scripts/             # Utility scripts
└── public/              # Static assets
```

## 🗄️ Database Schema

### Main Tables
- `products` - Product catalog (212 products)
- `orders` - Customer orders
- `order_items` - Order line items
- `admins` - Admin users
- `admin_sessions` - Admin authentication

### Storage Buckets
- `product-images` - Public bucket for product images

## 🔒 Security Notes

1. **Environment Variables**: Never commit `.env` file to Git
2. **Admin Passwords**: Use strong passwords for admin accounts
3. **RLS Policies**: All tables have Row Level Security enabled
4. **API Keys**: Only use `anon` key in frontend code

## 🛠️ Useful Commands

```bash
# Development
npm run dev                    # Start dev server

# Production
npm run build                  # Build for production
npm run preview                # Preview production build

# Database
npm run export-db              # Export database
npm run migrate-images         # Migrate images to Supabase

# Testing
# Open browser and test all pages
# - Homepage: http://localhost:5173
# - Products: http://localhost:5173/products.html
# - Admin: http://localhost:5173/admin/login.html
```

## 🐛 Troubleshooting

### Products not loading
- Check `.env` file has correct Supabase credentials
- Verify migrations have been run
- Check browser console for errors

### Images not showing
- Verify Storage bucket exists: `product-images`
- Check RLS policies on storage.objects table
- Ensure images were migrated: `npm run migrate-images`

### Admin login fails
- Verify admin user exists in `admins` table
- Check password hash was created correctly
- Clear browser cache and cookies

### Build errors
- Run `npm install` to ensure dependencies are installed
- Check Node.js version (should be v16+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 📞 Support

For questions or issues:
- Email: mistersingh1000@gmail.com
- WhatsApp: +91-7009732517
- Telegram: @digialmarketing

## 📄 Files You Need to Download

To deploy on another server, download these:

1. **Entire project folder** (all source code)
2. `database-export/` folder (database backup)
3. `supabase/migrations/` folder (database schema)
4. `.env` file (update with new credentials)
5. This guide (DEPLOYMENT_GUIDE.md)

## ✅ Pre-Flight Checklist

Before going live:

- [ ] All migrations run successfully
- [ ] Products data imported (212 products)
- [ ] Admin user created
- [ ] Environment variables set correctly
- [ ] Images loading properly
- [ ] Test complete purchase flow
- [ ] Payment details updated (UPI, contact info)
- [ ] Admin panel accessible
- [ ] Site tested on mobile devices
- [ ] SSL certificate installed (HTTPS)

---

**Last Updated:** ${new Date().toISOString().split('T')[0]}
**Version:** 1.0.0
**Database:** Supabase PostgreSQL
**Frontend:** Vanilla JavaScript + Vite
