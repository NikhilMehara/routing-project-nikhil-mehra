import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
    const params = useParams();
    const [loading,setLoading] = useState(false);
    const [data, setData] = useState([]);
    const {setCount} = useContext(CartContext);
    const {saved,setSaved} = useContext(CartContext);

    useEffect(()=>{
      setLoading(true);
        axios({
           url:`${process.env.REACT_APP_SERVER_URL}/products/${params.id}`,
        }).then(res=>{
         setLoading(false);
         setData(res.data);
         console.log(res.data)
        }).catch((err)=>{
         setLoading(false);
         alert("error")
        });
   },[params.id])
   
   const handleClick =()=>{
        setCount(prev=>prev+1);
        let payload ={
            brand: data.brand,
            title: data.title,
            image: data.image,
            category: data.category,
            price: data.price
        }
        setSaved([...saved,payload]);
   }

  return (
    <div>
        <div key={data.id}>
        <img src={data.image} alt='avatar' width="300px"/>
        <h2>name : {data.title}</h2>
        <h4>Brand : {data.brand}</h4>
        <h4>Category : {data.category}</h4>
        <h4>Price : {data.price}</h4>
        <button onClick={handleClick}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetails