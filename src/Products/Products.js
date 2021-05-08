import axios from 'axios';
import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import * as classes from './Products.module.css';

class Products extends Component {

    /* 
        mounting ->constructor()
                 -> static getDerivedStateFromProps()
                 -> render()
                 -> componentDidMount()
        updating -> shouldComponentUpdate()
        unmouting-> componentdidunmount()
        errohanding-> 
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

    detailsHandler(cakeid) {
        this.props.history.push("/product-details?cake-id="+cakeid );
    }
    
    render() {
        console.log('render')
        return (
                <React.Fragment>
                    <ErrorBoundary>
                        <div className={classes.cardsList}>  
                        {this.state.products?this.state.products.map((prod)=>{                         
                            return <div className={classes.card} key={prod.cakeid} onClick={()=>this.detailsHandler(prod.cakeid)}>
                                        <div className={classes.card_image}>
                                            <img src={prod.image} /> 
                                        </div>
                                        <div className={classes.card_title}>                            
                                            <p>{prod.name}</p>
                                        </div>
                                    </div>        
                        }): null}  
                        </div>
                    </ErrorBoundary>
                </React.Fragment>
                ) 
    }
}

export default Products;