import React, { useEffect, useState } from 'react';
import OfferCard from '/src/components/offercard/offerCard.jsx'
import './offers.css'
import { Link } from 'react-router-dom';
import OffervoucherData from '/src/components/offervoucher/offervoucher.jsx'
function Offers() {

    const [offersData, setoffersData] = useState([]);
    const [showcontent, setshowcontent] = useState(true);
    const [offervoucherData, setoffervoucherData] = useState([])
    const [offerVoucherFilter, setofferVoucherFilter] = useState([]);
    const [inputbar, setinputbar] = useState('')

    function filteroffers(data){
        filterdata = offervoucherData.filter( (ftrdata) =>{
            console.log(data.toLocaleLowerCase());
           return  ftrdata?.data?.data?.couponCode?.toLocaleLowerCase().includes(data.toLocaleLowerCase());
        })
        setofferVoucherFilter(filterdata);
        // console.log(filterdata);
        // console.log(offervoucherData);
        // console.log(offerVoucherFilter);
    }

    async function fetchDataOfcards(){
        setshowcontent(false);
        const rough_data= await fetch('https://www.swiggy.com/dapi/offers/payment?lat=12.9715987&lng=77.5945627&offset=29')
        const json = await rough_data.json();
        const offervouchersData= json?.data?.cards;
        offervouchersData.shift();
        setoffervoucherData(offervouchersData);
        setofferVoucherFilter(offervouchersData);

    }

    const offer__url = 'https://www.swiggy.com/dapi/offers/restaurant?lat=12.9715987&lng=77.5945627&offset=0'

    async function fetchData() {
        const roughData = await fetch(offer__url)
        const jsonData = await roughData.json();
        const data = jsonData?.data?.cards

        data.shift();
        // console.log(data);
        setoffersData(data);
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="header">
                <div className="text">
                    <h1>Offers for you</h1>
                    <p>Explore top deals and offers exclusively for you!</p>
                </div>
                <div className="img">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham" alt="" />
                </div>
            </div>
            <div className='buttons'>
                <button onClick={()=>setshowcontent(true)}>Restaurant offers</button>
                <button onClick={()=> fetchDataOfcards()} >Payment offers/Coupons</button>
               
            </div>

            { showcontent? 
                (<div className='offers' >
                    {

                        offersData.map((offer) => {
                            return <Link to={`/RESTORENTS/${offer.data.data.id}`} className='link'><OfferCard key={offer.data.data.id} props={offer} />
                            </Link>
                        })
                    }
                </div>) :
                (<div>
                    <>
                    
                        <h3>search : </h3><input type="text" value={inputbar} onChange={(e)=>{setinputbar(e.target.value)}}/>
                        <button   onClick={()=>filteroffers(inputbar)}  >SEARCH</button>
                        <div className="offer-card-container">
                        { 
                            // offervoucherData.map((offercard)=>{
                            //     return offercard?.cardType=='messageCard' ? 
                            //     (<><h2 key={offercard?.data?.type} className="voucherType">{offercard?.data.type }</h2> </>)   :( <OffervoucherData  props={offercard?.data?.data} 
                            //         key={offercard?.data?.data?.couponCode} />)
                            // })
                            offerVoucherFilter.map((offercard)=>{
                                return offercard?.cardType=='messageCard' ? 
                                (<><h2 key={offercard?.data?.type} className="voucherType">{offercard?.data.type }</h2> </>)   :( <OffervoucherData  props={offercard?.data?.data} 
                                    key={offercard?.data?.data?.couponCode} />)
                            })
                        }
                    

                    </div>
                    </>

                </div>)
            }




        </>)

}
export default Offers;
