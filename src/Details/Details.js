
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as classes from './Details.module.css';

const Details = (props)=>{

    const params  = useParams();
    const [product, setProduct] = useState("");

    const cake_id = params.cakeid;

    useEffect(() =>{

        /*  call product detail API */
        getProductDetails();
    }, []);
    

    const getProductDetails = () => {
        axios.get(`https://apibyashu.herokuapp.com/api/cake/${cake_id}`)
             .then(response => {               
                setProduct(response.data.data);
             })
             .catch(error =>{
                 console.log(error);
             });
    }

    return (<div className={classes.details}>
                <div className={classes.img_sec}>
                    <img  src={product.image}/>
                </div>
                <div className={classes.content}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>{product.flavour}</p>
                    <p>{product.weight}KG</p>
                    <p>{product.ratings}</p>
                    <button className={classes.addTOButton}>ADD TO CART</button>
                    <button>ORDER NOW</button>
                </div>
               
            </div>)  
}

export default Details;