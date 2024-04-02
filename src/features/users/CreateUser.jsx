import { useState } from 'react';
import Button from '../../ui/Button';
import { updateUser } from './userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate= useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUser(username));
    navigate('/menu')
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-5 w-72 py-1 pl-3"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
