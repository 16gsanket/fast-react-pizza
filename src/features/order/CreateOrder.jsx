import { useSelector } from 'react-redux';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { clearCart, getCart } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import { getTotalCartPrice } from '../cart/cartSlice';
import {formatCurrency} from '../../utils/helpers'
import store from '../../store'
import { useState } from 'react';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const user_name= useSelector(state=>state.user.username)

  const cart = useSelector(getCart)
  const cart_total_price = useSelector(getTotalCartPrice)

  const priority_price = withPriority ? cart_total_price+ cart_total_price*0.2 : 0;

  const cart_price_with_priority = cart_total_price + priority_price;

  // const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();

  if(cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-7 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center  ">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            required
            value={user_name}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center  ">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow ">
            <input type="tel" name="phone" required className="input" />
            {formErrors?.phone && <p className='mt-2 text-xs text-red-700 bg-red-100 p-2 rounded-md'>{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center  ">
          <label className="sm:basis-40">Address</label>
          <div>
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" value={JSON.stringify(cart)} name="cart" />

          <Button type="primary" disabled={isSubmitting}>
            {/* Order now {formatCurrency(cart_total_price)} */}
            Order now {formatCurrency(cart_price_with_priority)}
          </Button>

          {isSubmitting ? <p>Ordering </p> : <p>Order Now!</p>}
        </div>
      </Form>
    </div>
  );
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   const order = {
//     ...data,
//     cart: JSON.parse(data.cart),
//     priority: data.priority === 'true',
//   };

//   console.log(order);

//   const errors = {};
//   if (!isValidPhone(order.phone))
//     errors.phone =
//       'Please give us your correct phone number. We might need it to contact you.';

//   if (Object.keys(errors).length > 0) return errors;

//   // If everything is okay, create new order and redirect
//   const newOrder = await createOrder(order);

//   // Do NOT overuse
//   store.dispatch(clearCart());

//   return redirect(`/order/${newOrder.id}`);
// }

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    priority: data.priority === 'true',
    cart: JSON.parse(data.cart),
  };

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone = 'Please Provide a Valid Phone Number so we can contact you.';

  if (Object.keys(errors).length > 0) return errors;

  const new_Order = await createOrder(order);
  
  store.dispatch(clearCart())
  return redirect(`/order/${new_Order.id}`);
}

export default CreateOrder;
