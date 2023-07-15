import { useState } from 'react';
import './offervoucher.css'

const URL='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/';

function OffervoucherData({props}) {
    // const [filtervoucher, setfiltervoucher] = useState(second)
    function copyCode(){
        navigator.clipboard.writeText(props.couponCode);
    }
    // console.log(key);
    return (
        <div className="offervoucher-card">
            <div className="cardHead">
                <span><img src={URL+props?.logo} alt="" /></span><span>{props.couponCode}</span>
            </div>
            <div className="cardFoot" >  
                <p className="title" >{props?.title}</p>
                <p className="description" >{props?.description}</p>
                <button className="more" >+more</button><button className="copyCode" onClick={()=>copyCode()} >copy code</button>
            </div>
           
      </div > 
    )
}
export default OffervoucherData;



// this is code of on click more 
// <div className="more-card">
// <div className="cardHead">
//     <span><img src={URL+props?.logo} alt="" /></span><span>{props.couponCode}</span>
// </div>
// <div className="cardFoot" >  
//     <p className="title" >{props?.title}</p>
//     <p className="description" >{props?.description}</p>
//     <ul>
//     { props?.tnc?.bulletTexts.map((bulletText,idx)=>{
//         return  <li key={idx} > {bulletText.slice(0,80)+'.'}</li>
//     })}
//     </ul>
      
// </div>

// </div>