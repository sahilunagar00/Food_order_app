import React from 'react'
import './restorentcard.css'
import {addItem  }  from '../../utils/cartSlice'
import { useDispatch } from 'react-redux'

function RestorentCard(props) {
    // console.log(props.key);
    // console.log(props.parameter);
    const dispatch = useDispatch()

    function handleAddItems(){
        dispatch(addItem({...property,
            img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/',
        }))
    }

    var property = props?.parameter;
    const url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + property.imageId;
    // console.log( property?.price);
    return (
        <>
            <div className='RestorentCard-card' >
                <div className="RestorentCard-img">
                    <img src={url} alt="" />
                </div>
                <div className="restorentCard-detail">
                    <h1>{property?.name}</h1>
                    <h2>{property?.category}</h2>
                    <p>{property?.description}</p>
                    <h3>{property?.ratings?.aggregatedRating?.rating}</h3>
                    <button  onClick={()=>handleAddItems()}   >add items</button>
                    </div>
            </div>
        </>)
}
export default RestorentCard;