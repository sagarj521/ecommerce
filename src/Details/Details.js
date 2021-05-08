import React from 'react';

const Details = (props)=>{

    // console.log(props.history.location.search);
    // console.log("on detials");
  
        if(props.name == "ekta")
        {
            throw new Error("etka is valid");
        }
        
        return <div>{props.name}</div>  
}

export default Details;