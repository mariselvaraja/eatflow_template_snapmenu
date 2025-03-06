import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useCart } from '../context/CartContext';
import { ShoppingCart, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Checkout() {
  const { cart, calculateTotal, isCartOpen, toggleCart, clearCart } = useCart();
  const [delivery, setDelivery] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const deliveryFee = 5;
  const navigate = useNavigate();

  useEffect(() => {
    if (isCartOpen) {
      toggleCart();
    }
  }, []);

  const toggleDelivery = () => {
    setDelivery(!delivery);
  };

  const calculateTotalWithDelivery = () => {
    let total = calculateTotal() * 1.08;
    if (delivery) {
      total += deliveryFee;
    }
    return total;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src="https://plus.unsplash.com/premium_photo-1678051386853-5623e723745a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
            
        <Navigation />

        <div className="relative z-10 container mx-auto px-6 h-[calc(70vh-120px)] flex items-center justify-center text-center">
          <div>
            <div className="flex justify-center mb-6">
              <ShoppingCart className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-7xl font-bold text-white mb-8">
              Checkout
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Complete your order
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Delivery/Takeout Options */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">How would you like to receive your order?</h2>
            <div className="flex justify-around">
              <div
                className={`rounded-lg p-4 flex flex-col items-center cursor-pointer ${!delivery ? 'border-2 border-green-500 text-green-500 shadow-md' : 'border border-gray-300 text-gray-700'}`}
                onClick={() => setDelivery(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mb-2">
                  <path d="M19 18l-2-2a3 3 0 0 0-2-1h-5a3 3 0 0 0-2 1l-2 2v-8l3-3a2 2 0 0 1 2-.5h6a2 2 0 0 1 2 .5l3 3z"></path>
                  <path d="M3 6l3 3 2.5-2.5"></path>
                  <path d="M9 3v5"></path>
                </svg>
                <p className="font-semibold">Takeout</p>
                <p className="text-sm text-gray-500 text-center">Pick up at restaurant</p>
              </div>
              <div
                className={`rounded-lg p-4 flex flex-col items-center cursor-pointer ${delivery ? 'border-2 border-green-500 text-green-500 shadow-md' : 'border border-gray-300 text-gray-700'}`}
                onClick={toggleDelivery}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mb-2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"></path>
                </svg>
                <p className="font-semibold">Delivery</p>
                <p className="text-sm text-gray-500 text-center">Delivered to your address</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
           <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center py-2 border-b border-gray-200">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <p className="text-gray-700">{item.name}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="text-gray-700 ml-auto">${(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
              </div>
            ))}
            <div className="py-2 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-700">Subtotal:</p>
                <p className="text-gray-700">${calculateTotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-700">Tax (8%):</p>
                <p className="text-gray-700">${(calculateTotal() * 0.08).toFixed(2)}</p>
              </div>
              {delivery && (
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Delivery Fee:</p>
                  <p className="text-gray-700">${deliveryFee.toFixed(2)}</p>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-lg font-semibold">Total:</p>
              <p className="text-lg font-semibold">${calculateTotalWithDelivery().toFixed(2)}</p>
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-full mt-4"
              onClick={() => {
                setOrderPlaced(true);
                clearCart();
                navigate('/confirmation');
              }}
            >
              Place Order
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              By placing your order, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>

          {/* Pickup Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Pickup Information</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="pickupTime" className="block text-gray-700 font-medium mb-2">Preferred Pickup Time</label>
                <input
                  type="datetime-local"
                  id="pickupTime"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Select a time"
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="saveInfo" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="saveInfo" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Save this information for next time</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
