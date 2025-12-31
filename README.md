# 🍽️ FoodHub - Complete Food Delivery App

A modern, fully-functional food delivery application with animations, cart functionality, and professional UI/UX.

## 🎯 Features Implemented

### ✨ Navigation & Header
- **Sticky Navigation Bar**: Always visible with smooth animations
- **Logo with emoji**: 🍽️ FoodHub branding
- **Nav Sections**: 
  - 🏠 Home
  - 🍽️ Restaurants
  - 🥘 All Foods
- **Cart Badge**: Shows real-time item count with animations
- **GSAP Animations**: Smooth entrance animations on load

### 🎨 Hero Section (Banner)
- **Animated Banner**: Gradient background with smooth transitions
- **Floating Emojis**: Animated food items floating in the background
- **Call-to-Action**: "Order Now" button with hover effects
- **Responsive Design**: Works on all screen sizes

### 🍕 Food Display & Design
- **Food Cards** with:
  - High-quality food images
  - Veg (🟢) / Non-Veg (🔴) indicators
  - Star ratings displayed
  - Food descriptions
  - Prices clearly visible
  - "Add to Cart" buttons with pulse animations

- **Card Animations**:
  - Slide-up entrance animation
  - Scale & lift on hover
  - Image zoom on hover
  - Shadow effects
  - Smooth transitions

### 🔍 Search & Filter System
- **SearchBar Component**: Real-time search through food items
- **FilterBar Component**: Filter by categories:
  - 🍕 Pizza
  - 🍔 Burgers
  - 🍣 Sushi
  - 🌮 Tacos
  - 🍗 Non-Veg
  - 🥗 Vegetarian
  - 🍰 Desserts
  - 🍦 Ice Cream

### 📄 Pages

#### Home Page (`/`)
- Hero banner with animations
- Search functionality
- Category filters
- Food items grouped by category
- Stats section showing restaurant count

#### Restaurants Page (`/restaurants`)
- Browse all restaurants
- Restaurant cards with:
  - Images
  - Cuisine type
  - Ratings
  - Delivery time
  - Click to view menu

#### All Foods Page (`/foods`)
- View all food items from all restaurants
- Search across all restaurants
- Filter by food type/category
- Items grouped by restaurant

#### Restaurant Detail Page (`/restaurant/:id`)
- Restaurant header with image
- Restaurant info (rating, delivery time, min order)
- Menu items filtered by categories
- Search within restaurant menu

#### Cart Page (`/cart`)
- View all added items
- Quantity controls (+ and -)
- Remove items
- Order summary with:
  - Subtotal
  - Delivery fee ($2.99)
  - Tax calculation
  - Final total
- "Proceed to Checkout" button
- "Continue Shopping" link for empty cart

### 🛒 Cart Functionality
- **Add to Cart**: Click "+ Add" button to add items
- **Quantity Management**: Increase/decrease quantities
- **Item Removal**: Remove specific items
- **Cart Badge**: Real-time count updates
- **Order Summary**: Clear breakdown of costs
- **Checkout**: Place order with confirmation message
- **Context API**: Global state management for cart

### 🎭 Animations & Effects
- **GSAP Animations**:
  - Header entrance animation
  - Logo scale animation
  - Navigation link staggered animation
  - Hero title and subtitle animations
  - Floating emoji animations

- **CSS Animations**:
  - Food card entrance (slideUp)
  - Hover effects (scale, lift, shadow)
  - Image zoom on hover
  - Badge floating animation
  - Button pulse animation on click
  - Rating badge pulse

### 🎨 Professional Styling
- **Color Scheme**:
  - Primary: #ff6b35 (Orange)
  - Secondary: #667eea (Blue-Purple)
  - Neutral: #333, #f8f9fa
  
- **Typography**: Clean, modern sans-serif fonts
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle box-shadows for depth
- **Gradients**: Beautiful linear gradients

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: 768px and 480px
- Touch-friendly buttons and controls
- Flexible grid layouts
- Optimized images for all devices

### 🚀 Technical Stack
- **Frontend Framework**: React 18+
- **Routing**: React Router v7
- **State Management**: Context API
- **Animations**: GSAP
- **Build Tool**: Vite
- **Styling**: CSS3 with animations
- **Data**: JavaScript data structures

### 📊 Data Structure
- **Restaurants**: 6 restaurants with full details
- **Foods**: 24+ food items across categories
- **Categories**: 8 food categories
- **Real Images**: Unsplash URLs for authentic food photos

## 🚀 How to Use

### Start Development Server
```bash
npm run dev
```
Server runs on `http://localhost:5178`

### Build for Production
```bash
npm run build
```

### Key User Flows

**Shopping Flow:**
1. Visit home page and explore featured foods
2. Use search to find specific items
3. Use filters to browse by category
4. Click on restaurants to see full menu
5. Click "+ Add" to add items to cart
6. View cart by clicking 🛒 icon
7. Adjust quantities as needed
8. Click "Proceed to Checkout"

**Navigation Flow:**
1. Use navbar to navigate between pages
2. Each page has consistent header and footer
3. Click logo to return home
4. Cart badge shows current items count

## 📁 Project Structure
```
src/
├── components/
│   ├── Header.jsx (with GSAP animations)
│   ├── Hero.jsx (with floating animations)
│   ├── FoodCard.jsx (with hover effects)
│   ├── SearchBar.jsx
│   ├── FilterBar.jsx
│   ├── FoodCategory.jsx
│   ├── Footer.jsx
│   └── *.css (component styles)
├── pages/
│   ├── Home.jsx (search & filters)
│   ├── Restaurants.jsx
│   ├── Foods.jsx (all foods)
│   ├── Restaurant.jsx (detail page)
│   ├── Cart.jsx (cart management)
│   └── *.css (page styles)
├── context/
│   └── CartContext.jsx (cart state)
├── data/
│   └── restaurants.js (food data)
├── App.jsx (routing)
├── App.css (global styles)
└── main.jsx
```

## ✅ Completed Features
- ✅ Navigation bar with multiple sections
- ✅ Hero banner with animations
- ✅ Food card design with realistic images
- ✅ Search functionality
- ✅ Filter by food categories
- ✅ Add to cart with animations
- ✅ Cart page with full management
- ✅ Quantity controls
- ✅ Order summary
- ✅ GSAP animations throughout
- ✅ Responsive design
- ✅ Professional styling
- ✅ Multiple pages with routing
- ✅ Context API for state management

## 🎯 Next Enhancements (Optional)
- User authentication
- Payment integration
- Order tracking
- User reviews and ratings
- Wishlist feature
- Advanced filters
- User preferences
- Admin panel

---

**Happy Food Ordering! 🍕🍔🍣**
