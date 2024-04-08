import { formatCurrency } from "../../utils/helpers";
import Button from '../../ui/Button'
import { useDispatch } from "react-redux";
import { addItem ,getPizzaQuantity } from "../cart/cartSlice";
import DeleteItem from "../../ui/DeleteItem";
import { useSelector } from 'react-redux';
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice
    , ingredients, soldOut, imageUrl } = pizza;

    function handleaddpizza(){
      console.log(id)
      const newItem = {
        pizzaId:id,
        name,
        quantity:Number(1),
        unitPrice,
        totalPrice: unitPrice * 1
      }
      dispatch(addItem(newItem))
    }
    //isInCart somehow returns the number of pizzas in the cart...

    const isInCart = useSelector(getPizzaQuantity(id))

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}/>
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between ">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}


        {
          (isInCart) ? 

          <div className="sm:flex gap-2 space-y-2 sm:items-center sm:align-middle sm:justify-center">
            <UpdateItemQuantity pizzaId={id}/>
          <DeleteItem pizzaId={id}/>
        </div>
           : null
        }

        {!soldOut && !isInCart && <Button type="small" onClick={handleaddpizza}>Add to cart</Button>}



        </div>
      </div>
    </li>
  );
}

export default MenuItem;
