# PillPoint Web Application

A comprehensive pharmaceutical e-commerce platform with distinct interfaces for Buyers, Sellers, and Administrators.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## User Interfaces

### 1. Buyer Interface
Access the buyer interface through these main features:
- **Home**: `/home` - Main shopping dashboard
- **Product Categories**:
  - General Health: `/general-health`
  - Medical Supplies: `/medical-supplies`
  - Personal Care: `/personal-care`
  - Supplements: `/supplements`
- **Shopping Features**:
  - Cart: `/cart`
  - Checkout: `/checkout`
  - Order Confirmation: `/order-confirmation`
- **Additional Features**:
  - Store Directory: `/stores`
  - User Profile: `/user-profile`
  - Chat Support: `/chatbot`
  - Contact Us: `/contact`

### 2. Seller Interface
Access seller features through `/seller` routes:
- **Dashboard**: `/seller/dashboard`
- **Product Management**: 
  - Overview: `/seller/product-management`
  - Product Details: `/seller/product-management/product/:id`
  - Advanced Editing: `/seller/product-management/edit-advanced/:id`
- **Sales & Records**:
  - Sales Overview: `/seller/sales`
  - Customer List: `/seller/records/customers`
  - Order List: `/seller/records/orders`
- **Profile**: `/seller-profile`

### 3. Admin Interface
Access admin features through `/admin` routes:
- **Dashboard**: `/admin/dashboard`
- **Inventory Management**:
  - Overview: `/admin/inventory`
  - Medicine List: `/admin/inventory/medicines`
  - Store Management: `/admin/inventory/stores`
  - Blocklist: `/admin/inventory/blocklist`
- **Reports**:
  - Overview: `/admin/reports`
  - Sales Reports: `/admin/reports/sales`
  - User Reports: `/admin/reports/users`
  - Store Verification: `/admin/reports/store-verification`
- **System Management**:
  - Contact Management: `/admin/contacts`
  - Settings: `/admin/settings`

## Authentication
- Sign In: `/signin`
- Sign Up: `/signup`
- Role Selection: `/sign-up-role`
