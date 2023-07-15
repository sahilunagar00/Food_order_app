import './offerCard.css'
// import {addItem  }  from '../../utils/cartSlice'
// import { useDispatch } from 'react-redux'


function OfferCard({props}){
    const IMG__URL='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
    // IMG__URL+ props?.data?.data?.cloudinaryImageId
    // const dispatch=useDispatch();

    // function handelAddItem(){
    //     dispatch(addItem('graps'))
    // }
    
    return(<>
        
        <div className=" OfferCard ">
            <img src={IMG__URL+ props?.data?.data?.cloudinaryImageId} alt="" />
            <div className='div'>
            <h2>{props?.data?.data?.name}</h2>
            <h3>{props?.data?.data?.cuisines.join(' , ')}</h3>
            <div className='info'>
                <h3>{props?.data?.data.avgRating}</h3>
                <h4>{props?.data?.data?.lastMileTravel.toString().slice(0,4)} miles</h4>
                <h4>{props?.data?.data?.slaString}</h4>
            </div>
            <h3>{props?.data?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</h3>
            {/* <button onClick={handelAddItem()}>add items</button> */}
            </div>
            
        </div>
    
    </>);
}
export default OfferCard;