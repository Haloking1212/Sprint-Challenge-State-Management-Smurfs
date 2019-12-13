import React, { useContext, useState } from 'react';
import axios from "axios";
import SmurfList from "./SmurfsList";
// import App from "./App";
import { SmurfContext } from '../context/SmurfContext';


function Smurfs () {
  const { data, update, setUpdate } = useContext(SmurfContext);
  console.log(data,"smurf test")


  const [form, setForm] = useState({
    name: '',
    age: '',
    height: ''
})


  return (
    <>
      <form onSubmit={(e) => {
            e.preventDefault()
            // sendData()
            axios.post('http://localhost:3333/smurfs', form)
            .then(res => {
              setUpdate(!update)
                console.log(res)
            })
            .catch(err => console.log(err))
        }} >
            <input 
                name='name'
                placeholder='Add Smurf'
                value={form.name}
                onChange={(e) => {
                    setForm({
                        ...form, 
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <input 
                name='age'
                placeholder='Age'
                value={form.age}
                onChange={(e) => {
                    setForm({
                        ...form, 
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <input 
                name='height'
                placeholder='Height'
                value={form.height}
                onChange={(e) => {
                    setForm({
                        ...form, 
                        [e.target.name]: e.target.value})
                }}
            />
            <button type='submit'>Add Smurf</button>
            {data.map( smurf => (
              <SmurfList 
                key={smurf.id}
                smurf={smurf}
                
                
              />
            ))}
            
        </form>
    </>
  );
}
export default Smurfs;