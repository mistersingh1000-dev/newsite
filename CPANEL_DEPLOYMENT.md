# cPanel Deployment Guide - CodeCraft Marketing

## ✅ Yes! You Can Deploy Directly to cPanel

This guide will walk you through deploying your complete e-commerce site to cPanel hosting.

## 📋 What You Need

1. **cPanel hosting account** (shared hosting is fine)
2. **Domain name** (or subdomain)
3. **Supabase account** (free tier works) - for the database
4. **FTP/File Manager access** to your cPanel

## 🚀 Step-by-Step Deployment

### Step 1: Build the Project

The project is already built! The `dist/` folder contains all production files.

Files in `dist/`:
- `index.html` - Homepage
- `assets/` - Minified CSS and JavaScript
- `.htaccess` - Server configuration (already included)

### Step 2: Upload Files to cPanel

#### Option A: Using File Manager (Easiest)

1. **Login to cPanel**
2. **Open File Manager**
3. **Navigate to public_html** (or your domain folder)
4. **Upload the contents of the `dist/` folder**
   - Select all files inside `dist/`
   - Click Upload
   - Wait for upload to complete

#### Option B: Using FTP

1. **Open your FTP client** (FileZilla, etc.)
2. **Connect** using cPanel FTP credentials:
   - Host: ftp.yourdomain.com
   - Username: Your cPanel username
   - Password: Your cPanel password
3. **Navigate to public_html**
4. **Upload all files from `dist/` folder**

### Step 3: Upload HTML Pages

The built version only includes index.html. You need to copy the other HTML pages:

**Upload these files to public_html:**
```
products.html
product.html
cart.html
checkout.html
payment.html
thank-you.html
about-us.html
contact.html
privacy-policy.html
terms-and-conditions.html
refund-policy.html
```

**Also upload these folders:**
```
admin/ (entire folder with all files)
assets/ (if not already from dist)
```

### Step 4: Set Up Supabase Database

Since cPanel typically doesn't support PostgreSQL easily, we'll use Supabase (cloud database):

1. **Create Supabase Account**
   - Go to https://supabase.com
   - Sign up (free tier is enough)
   - Create a new project

2. **Run Database Migrations**
   - In Supabase Dashboard → SQL Editor
   - Copy content from each file in `supabase/migrations/` folder
   - Paste and run each migration (in order by filename)

3. **Import Product Data**
   - In Supabase Dashboard → SQL Editor
   - Open `database-export/products-data.sql`
   - Copy all content
   - Paste in SQL Editor
   - Click Run
   - You'll have all 212 products!

### Step 5: Configure Environment Variables

You need to add your Supabase credentials to the JavaScript files.

**Option A: Update via File Manager**

1. In cPanel File Manager, open: `assets/js/supabase-client.js`
2. Find these lines:
   ```javascript
   const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
   const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
   ```
3. Replace with your actual values:
   ```javascript
   const SUPABASE_URL = 'https://your-project.supabase.co';
   const SUPABASE_ANON_KEY = 'your-anon-key-here';
   ```

**Option B: Use a config file**

Create a file `config.js` in your root directory:
```javascript
window.SUPABASE_CONFIG = {
  url: 'https://your-project.supabase.co',
  anonKey: 'your-anon-key-here'
};
```

### Step 6: Test Your Site

1. Visit your domain: `https://yourdomain.com`
2. Check if homepage loads
3. Test products page
4. Try adding to cart
5. Check admin login at `yourdomain.com/admin/login.html`

## 📂 Correct File Structure in cPanel

Your `public_html` should look like this:

```
public_html/
├── index.html
├── products.html
├── product.html
├── cart.html
├── checkout.html
├── payment.html
├── thank-you.html
├── about-us.html
├── contact.html
├── privacy-policy.html
├── terms-and-conditions.html
├── refund-policy.html
├── .htaccess
├── admin/
│   ├── login.html
│   ├── dashboard.html
│   ├── products.html
│   ├── orders.html
│   ├── auth.js
│   └── assets/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── cart-checkout.css
│   │   └── responsive.css
│   └── js/
│       ├── supabase-client.js
│       ├── header.js
│       ├── homepage-products.js
│       ├── products-page.js
│       ├── product-detail.js
│       ├── cart-page.js
│       └── checkout-page.js
└── (other files from dist/)
```

## 🔧 Common Issues & Fixes

### Issue 1: Pages Show 404 Error

**Fix:** Make sure `.htaccess` file is uploaded and mod_rewrite is enabled.

Check your `.htaccess` file exists in `public_html/`:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]
```

### Issue 2: Products Not Loading

**Fix:** Check Supabase credentials in `assets/js/supabase-client.js`

Open browser console (F12) and look for errors.

### Issue 3: CSS/JS Not Loading

**Fix:** Check file paths. In cPanel, paths should be:
- `/assets/css/style.css`
- `/assets/js/supabase-client.js`

### Issue 4: .htaccess Not Working

**Fix:** Contact your hosting provider to enable `mod_rewrite`

Or add this to your `.htaccess`:
```apache
AddHandler application/x-httpd-php .html
```

### Issue 5: Images Not Loading

**Fix:** Product images are stored in Supabase Storage. Make sure:
1. Storage bucket `product-images` exists in Supabase
2. Images were migrated (already done - 86 images)
3. RLS policies allow public read access

## 🔐 Set Up SSL (HTTPS)

1. In cPanel → SSL/TLS Status
2. Run AutoSSL (free)
3. After SSL is active, uncomment these lines in `.htaccess`:
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

## 👤 Create Admin User

After database setup, create your admin account:

1. Go to Supabase Dashboard → SQL Editor
2. Run this query:
   ```sql
   INSERT INTO admins (email, password_hash, role)
   VALUES (
     'admin@yourdomain.com',
     crypt('your_secure_password_here', gen_salt('bf')),
     'super_admin'
   );
   ```
3. Access admin at: `https://yourdomain.com/admin/login.html`

## 📊 What Gets Deployed

- ✅ **212 Products** - All ready to sell
- ✅ **Shopping Cart** - Fully functional
- ✅ **Admin Panel** - Manage products & orders
- ✅ **Payment System** - Manual verification (UPI)
- ✅ **Responsive Design** - Mobile-friendly
- ✅ **SEO Optimized** - Good for Google

## 🎯 Quick Checklist

Before going live:

- [ ] All files uploaded to public_html
- [ ] .htaccess file present
- [ ] Supabase project created
- [ ] All migrations run in Supabase
- [ ] Product data imported (212 products)
- [ ] Supabase credentials updated in code
- [ ] SSL certificate installed
- [ ] Admin user created
- [ ] Test homepage loads
- [ ] Test product pages work
- [ ] Test cart functionality
- [ ] Test admin login works
- [ ] Update contact information (phone, email, UPI)

## 💡 Performance Tips

1. **Enable Gzip Compression** (already in .htaccess)
2. **Use Cloudflare** for CDN (optional but recommended)
3. **Optimize images** before uploading
4. **Enable browser caching** (already in .htaccess)

## 🔄 Updating Your Site

To update in the future:

1. Make changes to your local files
2. Run `npm run build`
3. Upload new files from `dist/` to cPanel
4. Clear browser cache

## 📞 Need Help?

### cPanel Issues
- Contact your hosting provider's support
- Check cPanel documentation

### Supabase Issues
- Check Supabase documentation: https://supabase.com/docs
- Supabase Discord community

### Site Issues
- Email: mistersingh1000@gmail.com
- WhatsApp: +91-7009732517

## 🎉 You're Live!

Once everything is uploaded and configured:

- Your site will be live at `https://yourdomain.com`
- Admin panel at `https://yourdomain.com/admin/login.html`
- 212 products ready to sell
- Start taking orders!

---

## Files You Need to Download for cPanel Deployment

**Essential Files:**
1. All files in `dist/` folder (built version)
2. All `.html` files (products.html, cart.html, etc.)
3. `admin/` folder (complete)
4. `assets/` folder (complete)
5. `database-export/products-data.sql`
6. `supabase/migrations/` (all 14 files)

**Total Upload Size:** ~2-3 MB (compressed)

**Deployment Time:** 15-30 minutes

---

Last Updated: ${new Date().toISOString().split('T')[0]}
