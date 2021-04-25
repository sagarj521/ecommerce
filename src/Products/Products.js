import axios from 'axios';
import React, { Component } from 'react';
import * as classes from './Products.module.css';

class Products extends Component {

    /* 
        mounting ->constructor()
                 -> static getDerivedStateFromProps()
                 -> render()
                 -> componentDidMount()
        updating -> shouldComponentUpdate()
        unmouting-> componentdidunmount()
        errohanding
    */    
    constructor(props) {
        super(props);
        console.log("constructor");

        this.state = {
            products: null
        }
    }

    componentDidMount() {
        this.getProducts();        
        console.log("componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }


    getProducts() {
        axios.get("https://apibyashu.herokuapp.com/api/allcakes")
             .then(res=>{
                 console.log(res);
                this.setState({
                    products: res.data.data
                });
             })
             .catch(error=>{
                console.log(error);
             });
    }

    render() {
        console.log('render')
        return (
                <React.Fragment>
                    <div className={classes.cardsList}>  
                    {this.state.products?this.state.products.map((prod)=>{
                        return <div className={classes.card} key={prod.cakeid}>
                                    <div className={classes.card_image}>
                                        <img src={prod.image} /> 
                                    </div>
                                    <div className={classes.card_title}>                            
                                        <p>{prod.name}</p>
                                    </div>
                                </div>        
                    }): null}  
                    </div>
                </React.Fragment>
                ) 
    }
}

export default Products;