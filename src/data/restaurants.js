export const foodCategories = [
  { id: 'all', name: '🍽️ All', type: 'all' },
  { id: 'veg', name: '🥗 Vegetarian', type: 'veg' },
  { id: 'nonveg', name: '🍗 Non-Veg', type: 'nonveg' },
  { id: 'pizza', name: '🍕 Pizza', type: 'pizza' },
  { id: 'burger', name: '🍔 Burgers', type: 'burger' },
  { id: 'sushi', name: '🍣 Sushi', type: 'sushi' },
  { id: 'tacos', name: '🌮 Tacos', type: 'tacos' },
  { id: 'dessert', name: '🍰 Desserts', type: 'dessert' },
  { id: 'icecream', name: '🍦 Ice Cream', type: 'icecream' },
];

export const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop",
    rating: 4.8,
    deliveryTime: "30-45 mins",
    cuisine: "Italian",
    minOrder: 15,
    foods: [
      { id: 101, name: "Margherita Pizza", price: 12.99, image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop", rating: 4.5, category: "pizza", type: "veg", description: "Fresh mozzarella, basil, and tomato on classic dough" },
      { id: 102, name: "Pepperoni Pizza", price: 14.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=400&h=300&fit=crop", rating: 4.7, category: "pizza", type: "nonveg", description: "Loaded with pepperoni and melted cheese" },
      { id: 103, name: "Vegetarian Paradise", price: 11.99, image: "https://images.unsplash.com/photo-1590080876000-98f9e0da5c23?w=400&h=300&fit=crop", rating: 4.3, category: "pizza", type: "veg", description: "Bell peppers, onions, mushrooms, and olives" },
      { id: 104, name: "Garlic Bread", price: 4.99, image: "https://images.unsplash.com/photo-1599599810694-d3fc99e38f27?w=400&h=300&fit=crop", rating: 4.6, category: "veg", type: "veg", description: "Crispy bread with garlic and herbs" },
    ]
  },
  {
    id: 2,
    name: "Burger Barn",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    rating: 4.6,
    deliveryTime: "20-30 mins",
    cuisine: "American",
    minOrder: 10,
    foods: [
      { id: 201, name: "Classic Burger", price: 9.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", rating: 4.4, category: "burger", type: "nonveg", description: "Juicy beef patty with lettuce, tomato, and special sauce" },
      { id: 202, name: "Cheese Burger", price: 10.99, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop", rating: 4.6, category: "burger", type: "nonveg", description: "Double cheese with crispy edges and caramelized onions" },
      { id: 203, name: "Bacon Burger", price: 12.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop", rating: 4.8, category: "burger", type: "nonveg", description: "Crispy bacon strips with melted cheese and fresh toppings" },
      { id: 204, name: "Veggie Burger", price: 8.99, image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=300&fit=crop", rating: 4.5, category: "burger", type: "veg", description: "Plant-based patty with avocado and special dressing" },
    ]
  },
  {
    id: 3,
    name: "Sushi Spot",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    rating: 4.9,
    deliveryTime: "35-50 mins",
    cuisine: "Japanese",
    minOrder: 20,
    foods: [
      { id: 301, name: "California Roll", price: 13.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop", rating: 4.7, category: "sushi", type: "nonveg", description: "Crab, avocado, and cucumber rolled in seasoned rice" },
      { id: 302, name: "Spicy Tuna Roll", price: 15.99, image: "https://images.unsplash.com/photo-1553581181-9a19ca1c0cfe?w=400&h=300&fit=crop", rating: 4.9, category: "sushi", type: "nonveg", description: "Spicy tuna with sriracha mayo and sesame seeds" },
      { id: 303, name: "Philadelphia Roll", price: 16.99, image: "https://images.unsplash.com/photo-1511689915726-cd4628902d4a?w=400&h=300&fit=crop", rating: 4.8, category: "sushi", type: "nonveg", description: "Salmon, cream cheese, and cucumber in premium rice" },
      { id: 304, name: "Vegetable Roll", price: 9.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop", rating: 4.4, category: "sushi", type: "veg", description: "Fresh vegetables with pickled ginger and wasabi" },
    ]
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    rating: 4.7,
    deliveryTime: "25-35 mins",
    cuisine: "Mexican",
    minOrder: 12,
    foods: [
      { id: 401, name: "Beef Tacos", price: 8.99, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop", rating: 4.5, category: "tacos", type: "nonveg", description: "Seasoned beef with fresh salsa and cilantro" },
      { id: 402, name: "Chicken Tacos", price: 9.99, image: "https://images.unsplash.com/photo-1624517936002-e8c8deab0e6a?w=400&h=300&fit=crop", rating: 4.6, category: "tacos", type: "nonveg", description: "Grilled chicken with lime and fresh toppings" },
      { id: 403, name: "Fish Tacos", price: 11.99, image: "https://images.unsplash.com/photo-1618022949671-b50f5aca9b52?w=400&h=300&fit=crop", rating: 4.7, category: "tacos", type: "nonveg", description: "Crispy fish with cabbage slaw and chipotle mayo" },
      { id: 404, name: "Veggie Tacos", price: 7.99, image: "https://images.unsplash.com/photo-1612488323941-32191039e7ba?w=400&h=300&fit=crop", rating: 4.4, category: "tacos", type: "veg", description: "Black beans, peppers, and fresh vegetables" },
    ]
  },
  {
    id: 5,
    name: "Curry House",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    rating: 4.5,
    deliveryTime: "40-55 mins",
    cuisine: "Indian",
    minOrder: 18,
    foods: [
      { id: 501, name: "Butter Chicken", price: 13.99, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", rating: 4.6, category: "nonveg", type: "nonveg", description: "Tender chicken in creamy tomato sauce" },
      { id: 502, name: "Chana Masala", price: 10.99, image: "https://images.unsplash.com/photo-1612488323941-32191039e7ba?w=400&h=300&fit=crop", rating: 4.5, category: "veg", type: "veg", description: "Chickpeas in aromatic spices and tomato gravy" },
      { id: 503, name: "Chicken Biryani", price: 12.99, image: "https://images.unsplash.com/photo-1613579931168-1b1d4e96f86f?w=400&h=300&fit=crop", rating: 4.7, category: "nonveg", type: "nonveg", description: "Fragrant basmati rice with tender chicken and spices" },
      { id: 504, name: "Gulab Jamun", price: 5.99, image: "https://images.unsplash.com/photo-1585518419759-2e8f2a1a8f8c?w=400&h=300&fit=crop", rating: 4.8, category: "dessert", type: "veg", description: "Milk solids in sweet syrup - traditional Indian dessert" },
    ]
  },
  {
    id: 6,
    name: "Sweet Dreams Ice Cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    rating: 4.9,
    deliveryTime: "15-20 mins",
    cuisine: "Desserts",
    minOrder: 8,
    foods: [
      { id: 601, name: "Vanilla Ice Cream", price: 4.99, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop", rating: 4.7, category: "icecream", type: "veg", description: "Creamy vanilla made with real Madagascar vanilla beans" },
      { id: 602, name: "Chocolate Fudge", price: 5.99, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop", rating: 4.9, category: "icecream", type: "veg", description: "Rich chocolate with fudge swirls and brownie chunks" },
      { id: 603, name: "Strawberry Cheesecake", price: 6.99, image: "https://images.unsplash.com/photo-1543521521-a58aa4e6a3a6?w=400&h=300&fit=crop", rating: 4.8, category: "icecream", type: "veg", description: "Creamy cheesecake with fresh strawberry pieces" },
      { id: 604, name: "Salted Caramel", price: 5.99, image: "https://images.unsplash.com/photo-1569014346565-e51006a8be5a?w=400&h=300&fit=crop", rating: 4.8, category: "icecream", type: "veg", description: "Sweet caramel with sea salt crystals for perfect balance" },
    ]
  },
];
