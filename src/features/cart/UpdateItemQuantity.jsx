import Button from "../../ui/Button"
import { useDispatch } from "react-redux";
import { decreaseItem, getPizzaQuantity, increaseItems } from "./cartSlice";
import { useSelector } from 'react-redux';

function UpdateItemQuantity({pizzaId , currentQuantity}) {
    const dispatch = useDispatch();
    const PizzaQuantity = useSelector(getPizzaQuantity(pizzaId))
    console.log('pizza quantity ', PizzaQuantity)
 
    return (
        <div className="flex gap-2 items-center" >
            <Button type='round' onClick={()=>dispatch(decreaseItem(pizzaId))}>-</Button>
            <p className="font-semibold text-md">{PizzaQuantity}</p>
            <Button type='round' onClick={()=>dispatch(increaseItems(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
