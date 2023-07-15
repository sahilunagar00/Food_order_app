import React from 'react'
import store from '../../utils/store'
import { useSelector , useDispatch } from 'react-redux'
// import Cartcard from '../../components/cartcard/cartcard'
import './cart.css'
import { increment_item,decrement_item,remove,total_ammount } from '../../utils/cartSlice'

// import { useState } from 'react'
function Cart() {
    const dispatch = useDispatch();
    const carts = useSelector(store => store.cart);
    function handel_decrement_items(cart){
        dispatch( decrement_item(cart) );
    }
    function handel_increment_items(cart){
        dispatch(increment_item(cart));
    }
    function handel_remove_items(cart){
        dispatch(remove(cart));
    }
    // function handel_total_ammount(){
    //     return  ammount=dispatch(total_ammount());
    // }
    // const [ammount, setammount] = useState(0)
    // useEffect(() => {
    //     setammount(handel_total_ammount())
    //   }
    // , [carts])
    
    

    return (
        <>
            <h1>this is cart</h1>
            <div className="cart-title">
                <h2 className="cart-title-product">products</h2>
                <h2 className="cart-title-price">price</h2>
                <h2 className="cart-title-quantity">quantity</h2>
                <h2 className="cart-title-total">total</h2>
            </div>
            <div>
                {
                    carts.items.map((item) => {
                        // console.log(item);
                        return(
                        <div className="cart-body">
                        <div className="cart-body-product">
                        <img src={item?.img+item?.imageId} alt="" className="cart-body-product-img" />
                        <div className="cart-body-detail">
                            <h3 className="cart-body-detail-name">{item?.name}</h3>
                            <h3 className="cart-body-detail-description">{item?.description}</h3>
                            <button className="cart-body-description-remove" onClick={()=>handel_remove_items(item)}      >remove</button>
                        </div>
                        </div>
                        <div className="cart-body-price">{item?.price}</div>
                        <div className="cart-body-quantity">
                            <button className="decrease" onClick={()=>handel_decrement_items(item)}  >-</button>
                            <h3 className="cart-body-quantity-number">{item?.quantity}</h3>
                            <button className="increase" onClick={()=>handel_increment_items(item)}  >+</button>
                        </div>
                        <div className="cart-body-total">{item?.quantity*item?.price}</div>
        
                    </div>)
                    })
                }
                {/* <h2>{ammount}</h2> */}
            </div>
        </>
    )
}
export default Cart;