import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { FiSearch } from 'react-icons/fi';
import { useOrders } from './context/OrderContext';
import ChatbotButton from './ChatbotButton';
import ChatbotModal from '../chatbot-page/chatbot-modal';
import { useSearch } from './context/SearchContext';

const NavBar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useOrders();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const { performSearch } = useSearch();
  const [searchInput, setSearchInput] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/home', icon: '/images/Client/product-page/home-logo.svg' },
    { name: 'Products', path: '/general-health', icon: '/images/Client/product-page/client-package.svg' },
    { name: 'Stores', path: '/stores', icon: '/images/Client/product-page/client-shopping-cart.svg' },
    { name: 'Contact Us', path: '/contact', icon: '/images/Client/product-page/client-vector.svg' },
  ];

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch(searchInput);
    navigate('/search-results');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
    navigate('/signin');
  };

  // Get first name from full name
  const firstName = currentUser?.name?.split(' ')[0] || 'User';

  return (
    <>
      <nav className="bg-[#FCFFFE] shadow-sm py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo and Nav Items */}
            <div className="flex items-center space-x-12">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/images/Client/product-page/PillLogo.svg" alt="PillPoint" className="h-12 w-12" />
                <span className="text-2xl font-semibold text-gray-800">PillPoint</span>
              </Link>
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-600 hover:text-pill-blue"
                  >
                    <img src={item.icon} alt={item.name} className="w-5 h-5" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side - Search, Language, Cart, User */}
            <div className="flex items-center space-x-6">
              {/* Search Bar */}
              <div className="relative">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search"
                    className="w-64 pl-4 pr-10 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-pill-blue"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <FiSearch className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Cart with Counter */}
              <Link to="/cart" className="relative">
                <img 
                  src="/images/Client/product-page/client-shopping-cart.svg" 
                  alt="Cart" 
                  className="w-6 h-6"
                />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#F1511B] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* User Profile */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 hover:opacity-80"
                >
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-sm text-white">
                    {firstName.charAt(0)}
                  </div>
                  <span className="text-sm hidden md:block">
                    {firstName}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/user-profile"
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <ChatbotButton onClick={() => setIsChatbotOpen(true)} />
      <ChatbotModal 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </>
  );
};

export default NavBar;