import React, { useContext } from 'react';
import { SmurfContext } from '../context/SmurfContext';
import { useForm } from '../hooks/useForm';

function Smurfs () {
  const callback = () => {
    console.log(values);
   setUrl(`http://localhost:3333/smurfs`);
  }

  const { state, setUrl } = useContext(SmurfContext);
  const [values, handleChange, handleSubmit, ageHandleChange, heightHandleChange] = useForm({name: '', age: "", height: "", id: Date.now()}, callback);

  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          placeholder="name"
          onChange={handleChange}
        />
        <input 
        name="age"
        placeholder="age"
        onChange={ageHandleChange}
        />
        <input 
        name="height"
        placeholder="height"
        onChange={heightHandleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
export default Smurfs;