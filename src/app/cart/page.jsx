'use client'
import { useSelector } from 'react-redux';
import CartDetails from './cartDetails/page';

const CartPage = () => {
    const cartItems = useSelector((state)=>state.cart.items);
    console.log("items",cartItems);
    return (
        <div>
            {
                cartItems.map((item)=><CartDetails key={item.id} item={item}></CartDetails>)
            }
        </div>
    );
};

export default CartPage;