import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Products.module.css';

const Products = () => {
    const [loading,setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page,setPage] = useState(Number(searchParams.get("page"))+1 ?? 1);
    console.log(page);

    useEffect(()=>{
       setLoading(true);
         axios({
            url:`${process.env.REACT_APP_SERVER_URL}/products?_page=${page}&_limit=9`,
            params:{
              page:page
            }
         }).then(res=>{
          setLoading(false);
          setData(res.data);
          console.log(res.data)
         }).catch((err)=>{
          setLoading(false);
          alert("error")
         });
    },[page])

    useEffect(()=>{
        setSearchParams({
          page
        })
    },[page])

  return (
    <div>
      <div style={{marginBottom:"30px",marginTop:"30px"}}>
        <button disabled={page===1} onClick={()=>setPage(prev=>prev-1)}>PREV</button>
        <button  onClick={()=>setPage(prev=>prev+1)}>NEXT</button>
      </div>
      <div className={styles.showContainer}>
        {data.map((user)=>{
            return <Link to={`/products/${user.id}`}>
               <div key={user.id} style={{border:"1px solid black"}}>
                <img src={user.image} width="150px" alt='avatar'/>
                <h3>{user.title}</h3>
                <h5>{user.brand}</h5>
                <h5>{user.category}</h5>
                <h5>{user.price}</h5>
               </div>
               </Link>
        })}
        </div>
    </div>
  )
}

export default Products