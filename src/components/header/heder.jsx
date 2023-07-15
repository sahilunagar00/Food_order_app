import './header.css'
import img from '/src/img/logo.png'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
 

function Header(){
    const cart = useSelector(store => store.cart.items);
    return(
        <div className='headerContainer'>
            
            <Link to='/'   className='link'><img src={img} alt="nsnsnsn" /></Link>
            <ul>
                {/* <li>HOME</li> */}
                {/* <li>CONTACT US</li> */}
                <Link to='/HOME' className='link'><li>HOME</li></Link>
                <Link to='/OFFERS'className='link' ><li>Offers</li></Link>
                <Link to='/ABOUT' className='link'><li>ABOUT US</li></Link>
                <Link to='/CART' className='link' ><li>CART -{cart.length}</li></Link>
                {/* <li>CART</li> */}
            </ul>
        </div>
    );
}
export default Header;