import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice } from './cartSlice';

function CartOverview() {
  // const totalCartPrice = 0;

  const totalCartPrice = useSelector(getTotalCartPrice)
  

  return (
    <div className=" flex  items-center justify-between bg-stone-800 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-6 font-semibold text-stone-300 sm:space-x-5">
        <span>{totalCartPrice} pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
