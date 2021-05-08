import React, { Component } from 'react';

class ErrorBoundary extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
                        hasError: false
                     };
    }

    static getDerivedStateFromError(error) {
       // Update state so the next render will show the fallback UI.
       console.log("error", error);
       
       return { hasError: true };
    }

    componentDidCatch(error, info){
        /* TODO log errors */
        console.log(info);
    }

    render() {
        if(this.state.hasError) {
           return  <h2>Something went wrong</h2>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;