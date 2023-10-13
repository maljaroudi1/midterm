import { useState } from 'react'

import './App.css'
import axios from 'axios';
function App() {

  const [product, setProduct] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  // Student name: Mohammed Aljaroudi
  // Student number: 301269584
  // Date: 10/12/2023

  async function  onSubmitProduct() {
    try{
      const response = await axios.post('http://localhost:5000/api/product',{
        product,
        name,
        price,
        quantity,
        category
      });

      console.log(response)
    }catch(error){
      console.log(error)
    }

  }

  return (
    <>
      <div className="form-container">
        <div className="form-products" style={{display: 'grid'}}>
          <label htmlFor="">Product</label>
          <input type="text" onChange={(e) => setProduct(e.target.value)}/>

          <label htmlFor="">Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />

          <label htmlFor="">Price</label>
          <input type="number" onChange={(e) => setPrice(e.target.value)} />

          <label htmlFor="">Quantity</label>
          <input type="number" onChange={(e) => setQuantity(e.target.value)} />

          <label htmlFor="">Category</label>
          <select name="" id="" onChange={(e) => setCategory(e.target.value)}>Category
              <option value="" selected disabled>Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Teens">Teens</option>
          </select>
          <button onClick={onSubmitProduct}>Submit</button>

        </div>
        <div className="form-catagories">

        </div>
      </div>
    </>
  );
}

export default App
