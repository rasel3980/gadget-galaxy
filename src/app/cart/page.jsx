'use client'
import { useSelector } from 'react-redux';
import CartDetails from './cartDetails/page';

const CartPage = () => {
    const cartItems = useSelector((state)=>state.cart.items);
    const isSelected = cartItems.filter(item=>item.selected)
    const totalPrice = isSelected.reduce((sum,item)=>sum + (item.price * item.cartQuantity),0).toFixed(2)
  const totalQuantity = isSelected.reduce((sum,item)=> sum + item.cartQuantity,0)
  
    return (
        <div>
            {
                cartItems.length !== 0 ?( <>
                <div>
            {
                cartItems.map((item)=><CartDetails key={item.id} item={item}></CartDetails>)
            }
            </div>
            <div className='flex justify-between items-center mt-6 w-10/12 mx-auto'>
                <button className='text-2xl font-bold'>Total Price: ${totalPrice}</button>
                <button className='text-2xl font-bold'>Total Quantity: {totalQuantity}</button>
            </div>
                </>):(<>
                <div className='text-center mt-12'>
                    <p className='text-red-600 font-bold text-5xl'>Sorry , No items in your cart</p>
                </div>
                </>)
            }
            
        </div>
    );
};

export default CartPage;