import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestorentCard from '/src/components/restorentCard/restorentcard.jsx'
import './restorentDetail.css'

function RestorentDetail() {
    const para = useParams()
    const { id } = para

    const [itemCards, setitemCards] = useState([]);
    const [restorentImg, setrestorentImg] = useState('');
    const [restorentdata, setrestorentdata] = useState('');
    useEffect(() => {
        fetchRestorents();
    }, []);
    async function fetchRestorents() {

        let url = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=' + id ;
        let data = await fetch(url);

        let jsonData = await data.json();
        // console.log(jsonData);
        let cards = await jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        // console.log(cards);
        setitemCards(cards);
        setrestorentImg(jsonData?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId);
        setrestorentdata(
            {
                name: jsonData?.data?.cards[0]?.card?.card?.info?.name,
                location: jsonData?.data?.cards[0]?.card?.card?.info?.city
            })
            
        // console.log(restorentdata);
    }


    return (

        <div className="RestorentDetail-container">
            <div className="RestorentDetail-container-img">
                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restorentImg}`} alt="" />
                <div className="RestorentDetail-container-data">
                    <h1>{restorentdata?.name}</h1>
                    <h3>{restorentdata?.location}</h3>
                </div>
            </div>
            <div className="RestorentDetail-card-container">

                {
        
                
                     itemCards.map((itemCard) => {
                        return <RestorentCard class='link' key={itemCard?.card?.info?.id } parameter={itemCard.card?.info} />
                    
                })}

            </div>
        </div>
    );

}
export default RestorentDetail;