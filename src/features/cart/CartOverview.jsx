import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className=" bg-stone-800  text-sm uppercase text-stone-200 sm:px-6 md:text-base flex items-center justify-between py-4">
      <p className="space-x-6 font-semibold text-stone-300 sm:space-x-5">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
