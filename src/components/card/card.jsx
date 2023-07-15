import React from 'react'
import './card.css'

import { GiNorthStarShuriken } from "react-icons/gi";



var Card = (props) => {
    data = props.data;
    const url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + data.data.cloudinaryImageId;
    // console.log(data.data.cloudinaryImageId);

    return (

        <div className="container"
            style={{
                borderRadius: data?.data?.promoted === true ? '0px 10px 10px 10px ' : '10px'
            }}  >
            <img src={url} alt="image" />
            <div className="container__data">
                <h2>{data?.data?.name}</h2>
                <p>{data?.data?.cuisines?.join(' , ')}</p>
                <div className='time' >
                    <h4 className='star'
                        style={{
                            backgroundColor: data?.data?.avgRating >= 4 ? '#48c479' : '#db7c38'
                        }}
                    ><GiNorthStarShuriken /> <span class='span'>{' ' + data?.data?.avgRating}</span></h4>
                    <h4>{data?.data?.deliveryTime} MIN</h4>
                    <h4>{data?.data?.costForTwoString}</h4>
                </div>
                <h3 className='offer' >{data?.data?.aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</h3>
                <h2 className="promote"
                    style={{
                        visibility: data?.data?.promoted == true ? 'visible' : 'hidden'
                    }}
                >promoted</h2>
            </div>

        </div>
    );
}
export default Card;