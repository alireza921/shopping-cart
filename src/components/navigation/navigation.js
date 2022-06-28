import { Link } from "react-router-dom";

const Navigation = () => {
    return (  
        <div> 
            <Link to='/'> Home </Link>
            <Link to='/cart' >  Cart </Link>
        </div>
    );
}
 
export default Navigation;