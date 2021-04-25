import axios from 'axios';
import React, { Component } from 'react';

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
                    <ul className="products">
                    {this.state.products?this.state.products.map((prod)=>{
                        return <li key={prod.cakeid} >
                                        <img src={prod.image} width="200px" height="200px"/>
                                        <div>
                                            <h2>{prod.name}</h2>
                                            <p>{prod.price}</p>
                                        </div> 
                                </li>                                
                    }): null}
                    </ul>  
                </React.Fragment>
                ) 
    }
}

export default Products;