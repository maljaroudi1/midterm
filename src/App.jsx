import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      if(product === ''){
        toast.error('Please enter a product')
      }
      if(name === ''){
        toast.error('Please enter a name')
      }
      if(price === ''){
        toast.error('Please enter a price')
      }
      if(quantity === ''){
        toast.error('Please enter a quantity')
      }
      if(category === ''){
        toast.error('Please select a category')
      }
      const response = await axios.post('http://localhost:5000/api/product',{
        product,
        name,
        price,
        quantity,
        category
      });
      toast.success('Product was subbmited!')
      console.log(response)
    }catch(error){
      toast.error('Error')
      console.log(error)
    }

  }

  function onCancel() {
    window.location.href="/"
  }

  return (
    <>
    <ToastContainer/>
    <h2>New product</h2>
      <div className="form-container">
        <div className="form-products" style={{display: 'grid'}}>
          <label htmlFor="">Product</label>
          <input type="text" onChange={(e) => setProduct(e.target.value)}/>

          <label htmlFor="">Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />

          <label htmlFor="">Price</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />

          <label htmlFor="">Quantity</label>
          <input type="text" onChange={(e) => setQuantity(e.target.value)} />

          <label htmlFor="">Category</label>
          <select name="" id="" onChange={(e) => setCategory(e.target.value)}>Category
              <option value="" selected disabled>Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Teens">Teens</option>
          </select>
          <button onClick={onSubmitProduct} style={{transform: 'translateY(1rem)'}}>Submit</button>
          <button onClick={onCancel} style={{transform: 'translateY(2rem)'}}>Cancel</button>
        </div>

      </div>
    </>
  );
}

export default App
