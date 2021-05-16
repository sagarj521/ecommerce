
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AuthContext from '../Context/auth-context';
import Loader from '../Loader/Loader';
import * as classes from './Details.module.css';

const Details = (props)=>{

    const params  = useParams();
    const [product, setProduct] = useState("");

    const cake_id = params.cakeid;
    const auth = useContext(AuthContext);
    console.log(auth.isLoggedIn);
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
                <div className={classes.leftColumn}>
                    {product.image? <img  src={product.image}/>:<Loader />}                    
                </div>
                <div className={classes.rightColumn}>
                <div className={classes.productDescription}>
                    <span>{product.type}</span>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
                <div className={classes.ingredients}>
                    <span>Ingredients</span>            
                    <div className={classes.ingredientssec}>
                        {product?.ingredients?.map((ingre)=>{
                            return <button key={ingre}>{ingre}</button>
                        })}
                    </div>
                    <span>flavour</span>
                    <p className={classes.flavour}>{product?.flavour}</p>
                </div>
              
                <button className="btn">ADD TO CART</button>
                <button className="btn">ORDER NOW</button>
            </div>    
            </div>)  
}

export default Details;