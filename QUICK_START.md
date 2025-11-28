# 🚀 Quick Start Guide

## Test Your Site in 2 Minutes

### Step 1: Install & Run
```bash
npm install
npm run dev
```

### Step 2: Open Browser
Visit: **http://localhost:5173**

### Step 3: Test Features

✅ **Browse Products**
- Click "Digital Marketing" in menu
- Try filters and sorting

✅ **Add to Cart**
- Click any product → "Add to Cart"
- Watch cart counter update

✅ **View Cart**
- Click cart icon (top right)
- Try changing quantities

✅ **Checkout**
- Click "Proceed to Checkout"
- Fill form (test data OK)
- Note the UPI payment section

✅ **Place Order**
- Enter any UPI transaction ID
- Submit to see confirmation

---

## 🎨 Customize Your Site

### Change Contact Info
**Files to edit:**
- `/assets/js/header.js` (lines 11-21)
- `/assets/js/footer.js` (lines 25-45)

**Replace:**
- Phone: +91 7009732517
- Email: codecraftm@gmail.com
- Telegram: t.me/digialmarketing

### Change Colors
**File:** `/assets/css/style.css` (lines 1-14)

```css
--primary-red: #E63946;     /* Your red */
--primary-blue: #1D3557;    /* Your blue */
--primary-pink: #E91E8C;    /* Your pink */
```

### Add UPI QR Code
1. Generate your QR code
2. Save as: `/assets/img/payment/upi-qr.png`
3. Update UPI ID in `/checkout.html` (line 72)

---

## 📦 Deploy to Hosting

### Build for Production
```bash
npm run build
```

### Upload to Server
Upload everything in `/dist` folder to your hosting.

---

## 🔄 Convert to PHP/MySQL

**See:** `PHP_CONVERSION_GUIDE.md`

Quick steps:
1. Export products from Supabase
2. Create MySQL database
3. Follow PHP code examples in guide
4. Upload to cPanel

---

## 📞 Need Help?

- **Documentation**: Check README.md
- **Customization**: See CUSTOMIZATION_GUIDE.md
- **PHP Conversion**: See PHP_CONVERSION_GUIDE.md
- **Support**: codecraftm@gmail.com

---

## ✅ What's Working

✔️ All pages load perfectly
✔️ Products display from database
✔️ Cart adds/removes items
✔️ Checkout creates orders
✔️ Design is responsive
✔️ Build succeeds

---

**You're all set! Start testing now:** `npm run dev`