'use client'

import { useSelector } from "react-redux"
import CartDetails from "../components/CartDetails"
import Link from "next/link"
import { FiShoppingBag, FiArrowRight } from "react-icons/fi"
import { 
  selectCartItems, 
  selectTotalPrice, 
  selectTotalQuantity 
} from "../redux/features/CartSlice"

const CartPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectTotalPrice)
  const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">
            Your <span className="text-blue-600">Shopping Cart</span>
          </h1>
          <p className="text-gray-500 font-bold text-sm uppercase tracking-widest mt-2">
            {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in your list
          </p>
        </div>

        {cartItems.length !== 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartDetails key={item.id} item={item} />
              ))}
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-4xl shadow-xl border border-gray-100 sticky top-12">
                <h2 className="text-xl font-black text-gray-800 uppercase tracking-tighter mb-6 border-b pb-4">
                  Order Summary
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between font-bold text-gray-500 uppercase text-xs tracking-widest">
                    <span>Total Quantity</span>
                    <span>{totalQuantity}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-500 uppercase text-xs tracking-widest">
                    <span>Shipping</span>
                    <span className="text-green-600 font-black">FREE</span>
                  </div>
                  <div className="h-[1px] bg-gray-100 my-4"></div>
                  <div className="flex justify-between items-end">
                    <span className="font-black text-gray-900 uppercase">Total Price</span>
                    <span className="text-3xl font-black text-blue-700 tracking-tighter">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
                <button className="w-full mt-8 py-4 bg-blue-600 hover:bg-blue-800 text-white rounded-tr-3xl rounded-bl-3xl font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-100 active:scale-95 flex items-center justify-center gap-3">
                  Order Now <FiArrowRight size={18} />
                </button>

                <Link href="/products" className="block text-center mt-6 text-xs font-black text-gray-400 hover:text-blue-600 uppercase tracking-widest transition-colors">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[3rem] shadow-xl border border-gray-50">
            <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <FiShoppingBag size={48} />
            </div>
            <h2 className="text-3xl font-black text-gray-800 tracking-tighter uppercase mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-400 font-medium mb-8">Looks like you havent added any gadgets yet.</p>
            <Link href="/products">
              <button className="px-10 py-4 bg-gray-900 hover:bg-black text-white rounded-tr-2xl rounded-bl-2xl font-black uppercase tracking-widest transition-all shadow-xl active:scale-95">
                Browse Products
              </button>
            </Link>
          </div>
        )}

      </div>
    </div>
  )
}

export default CartPage