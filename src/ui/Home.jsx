import { useSelector } from 'react-redux';
import CreateOrder from '../features/order/CreateOrder';
import CreateUser from '../features/users/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector(state=>state.user.username)
  
  return (
    <div className="my-8 text-center sm:my-16 ">
      <h1 className="mb-6 text-center text-xl font-semibold md:text-4xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>


      {username === '' ? <CreateUser /> : <Button to='/menu' type='primary'>Start Ordering , {username}</Button>}
    </div>
  );
}

export default Home;
