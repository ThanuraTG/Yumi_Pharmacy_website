import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CartDrawer({ isOpen, onClose, cartItems, updateQuantity, removeFromCart, clearCart }) {
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 40 ? subtotal * 0.1 : 0; // 10% discount for orders > $40
  const finalTotal = subtotal - discount;

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setOrderComplete(true);
      setTimeout(() => {
        clearCart();
        setOrderComplete(false);
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-6 bg-pharmacy-secondary text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag size={20} className="text-pharmacy-teal" />
              <h3 className="text-lg font-bold">Your Pharmacy Cart</h3>
            </div>
            <button 
              onClick={onClose} 
              className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderComplete ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-teal-50 text-pharmacy-teal rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl font-bold text-pharmacy-secondary">Order Placed Successfully!</h4>
                <p className="text-sm text-gray-500">
                  Your order has been verified. Our pharmacy staff will begin preparing your medical package right away.
                </p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag size={48} className="mx-auto text-gray-300 stroke-[1.5]" />
                <p className="text-gray-500 font-medium">Your shopping bag is empty.</p>
                <p className="text-xs text-gray-400">Add over-the-counter vitamins, care items, or medicines.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded-xl border border-gray-100" 
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-pharmacy-secondary truncate">{item.name}</h5>
                    <p className="text-xs text-pharmacy-teal font-semibold mt-0.5">${item.price.toFixed(2)} each</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-pharmacy-secondary px-1">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-pharmacy-secondary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 mt-2 p-1"
                      title="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && !orderComplete && (
            <div className="p-6 border-t border-gray-100 bg-pharmacy-bgLight/50 space-y-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Subtotal:</span>
                <span className="font-semibold text-pharmacy-secondary">${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-xs text-emerald-600 font-medium">
                  <span>Healthy Order Bonus (10% off):</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-extrabold text-pharmacy-secondary pt-2 border-t border-gray-200">
                <span>Estimated Total:</span>
                <span className="text-pharmacy-primary">${finalTotal.toFixed(2)}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className="w-full bg-pharmacy-teal hover:bg-pharmacy-tealHover text-white py-3.5 rounded-xl font-bold text-sm shadow-pharma-button flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <span>{checkingOut ? 'Processing Order...' : 'Proceed To Secure Checkout'}</span>
                  {!checkingOut && <ArrowRight size={16} />}
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-400 pt-1">
                <ShieldCheck size={14} className="text-pharmacy-teal" />
                <span>Safe 256-Bit SSL Payment & Pharmacy Verification</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

