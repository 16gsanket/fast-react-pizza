import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  getTotalCartQuantity, getTotalCartPrice  } from './cartSlice';
// import { getTotalCartPrice } from './cartSlice';

function CartOverview() {
  // const totalCartPrice = 0;

  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)
  // const getTotalCartPrice = useSelector()
  

  if(!totalCartPrice) return null;
  
  return (
    <div className=" flex  items-center justify-between bg-stone-800 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-6 font-semibold text-stone-300 sm:space-x-5">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
        {/* <span>$25</span> */}
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
