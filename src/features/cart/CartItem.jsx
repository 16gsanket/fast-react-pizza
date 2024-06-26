import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch } from "react-redux";
import { deleteItem } from './cartSlice';
import DeleteItem from '../../ui/DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  // function CartItem() {
  const { pizzaId, name, quantity, totalPrice } = item;
  // const name = 'sanket';
  // const totalPrice = 100;
  // const quantity = 120;
  const dispatch = useDispatch();
  
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity} &times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={pizzaId}/>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
