import * as classes from './Loader.module.css';

const Loader = () => {
    return ( 
        <div className={classes.loader_main}>
            <div className={classes.loader}></div>
        </div>
     );
}
 
export default Loader;