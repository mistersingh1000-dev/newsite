# Admin Panel Setup Guide

## Overview
Your e-commerce site now has a complete admin panel with authentication, product management, order management, and more.

## Admin Panel URL
Access the admin panel at: **`/admin/login.html`**

---

## First Time Setup - Create Admin Account

Since this is a new installation, you need to create your first admin user through the Supabase Dashboard.

### Step 1: Access Supabase Dashboard
1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Select your project

### Step 2: Create Admin User
1. Navigate to **Authentication** → **Users**
2. Click **"Add User"** button
3. Fill in the form:
   - **Email**: Enter your admin email (e.g., `admin@codecraftmarketing.in`)
   - **Password**: Create a strong password
   - **Confirm Password**: Re-enter the password

4. **IMPORTANT**: Before clicking "Create User", expand the **"User Metadata"** section
5. Add the following JSON in the **User Metadata** field:
   ```json
   {
     "is_admin": "true",
     "role": "super_admin",
     "full_name": "Your Name"
   }
   ```

6. Click **"Create User"**

### Step 3: Verify Admin User Creation
1. Go to **Table Editor** → **admin_users** table
2. You should see your admin user entry with:
   - Email
   - Role: super_admin
   - is_active: true

### Step 4: Login to Admin Panel
1. Navigate to `/admin/login.html` on your site
2. Enter your email and password
3. You should be redirected to the admin dashboard

---

## Admin Roles

The system supports three admin roles:

| Role | Permissions |
|------|------------|
| **super_admin** | Full access - can manage everything including other admins |
| **admin** | Can manage products, orders, customers, categories |
| **moderator** | Limited access - view only for most features |

---

## Admin Panel Features

### 1. Dashboard (`/admin/dashboard.html`)
- Overview statistics (products, orders, customers, revenue)
- Recent orders list
- Quick actions

### 2. Products Management (`/admin/products.html`)
- View all products in a table
- Add new products
- Edit existing products
- Delete products
- Search and filter products
- Set product as featured
- Publish/unpublish products

### 3. Orders Management (`/admin/orders.html`)
- View all customer orders
- Filter by status (pending, paid, processing, completed, cancelled)
- Search orders by order number, customer name, or email
- View order details

### 4. Activity Logs
- All admin actions are logged automatically
- Tracks: login, product creation/updates/deletion, order updates, etc.

---

## Security Features

✅ **Row Level Security (RLS)** enabled on all tables
✅ **Admin-only access** - Regular users cannot access admin panel
✅ **Activity logging** - All admin actions are tracked
✅ **Session management** - Automatic logout after inactivity
✅ **Password-protected** - Supabase Auth handles authentication

---

## Adding More Admin Users

As a super_admin, you can add more admin users:

### Method 1: Through Supabase Dashboard (Recommended)
1. Follow the same steps as "Create Admin User" above
2. Set appropriate role: `super_admin`, `admin`, or `moderator`

### Method 2: Programmatically (Future Feature)
A user management page will be added where super_admins can invite and manage other admins directly from the admin panel.

---

## Troubleshooting

### "Access denied. You are not authorized as an admin."
**Solution**: Make sure the user metadata includes `"is_admin": "true"` when creating the user in Supabase.

### Can't see admin_users entry after creating user
**Solution**: Check the Supabase Functions logs. The trigger should automatically create an entry. If not, manually insert into `admin_users` table:
```sql
INSERT INTO admin_users (id, email, role, full_name, is_active)
VALUES (
  'user-uuid-from-auth-users',
  'admin@example.com',
  'super_admin',
  'Admin Name',
  true
);
```

### Forgot admin password
**Solution**: In Supabase Dashboard → Authentication → Users, click on the user and select "Reset Password" or "Change Password".

---

## Quick Reference

### URLs
- **Admin Login**: `/admin/login.html`
- **Dashboard**: `/admin/dashboard.html`
- **Products**: `/admin/products.html`
- **Orders**: `/admin/orders.html`

### Database Tables
- `admin_users` - Admin user information and roles
- `admin_activity_logs` - Audit trail of admin actions
- `products` - Product catalog
- `orders` - Customer orders
- `product_images` - Product images
- `product_categories_new` - Product categories
- `product_tags_new` - Product tags

---

## Support

For issues or questions:
- Check Supabase logs for errors
- Verify RLS policies are correctly set
- Ensure user has `is_admin: true` in metadata
- Contact: mistersingh1000@gmail.com

---

## Next Steps

1. ✅ Create your admin account
2. ✅ Login to admin panel
3. ✅ Add/edit products
4. ✅ Manage orders as they come in
5. 📝 Consider adding image upload functionality
6. 📝 Set up email notifications for new orders
7. 📝 Add bulk product import/export features
