import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from '../cart/CartItem';
import { useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart'



function Cart() {
  const dispatch = useDispatch()
  const cart_now = useSelector(state=>state.cart.cart)
  console.log("cart now ",cart_now)

  const username = useSelector(state=>state.user.username)

  function handleClearCart(){
    console.log('inside clear cart')
      dispatch(clearCart())
  }

  if(!cart_now.length) return <EmptyCart />

  return (
    <div className='pl-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3 '>
        {cart_now.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>


      <div className="px-4 py-3 mt-6 space-x-2 flex ">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}


          <Button type='secondary' onClick={()=>dispatch(clearCart())}> Clear Cart</Button>
        {/* <button>Clear cart</button> */}
      </div>
    </div>
  );
}

export default Cart;
