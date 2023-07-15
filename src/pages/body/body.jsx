import React, { useState, useEffect } from 'react'
// import { cards } from './data'
import Card from '/src/components/card/card.jsx';
import './body.css'
import { Link } from 'react-router-dom';


function Body() {
    const [searchvalue, setSearchValue] = useState("");
    // const [restorants, setrestorants] = useState(cards);
    const [restorants, setrestorants] = useState([]);
    const [fullrestorants, setfullcrestorants] = useState([]);
    // const [promotNot, setpromotNot] = useState("all");

    async function function2() {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        // console.log(json);
        let apirestorents = json.data.cards[2].data.data.cards;
        // console.log('api',apirestorents);
        // console.log('card',cards);

        setrestorants(apirestorents);
        setfullcrestorants(apirestorents);
    }
    useEffect(() => {
        function2();
    }, []);
    function promotrornot(value) {
        if (value === 'all') {
            setrestorants(fullrestorants);
        }
        else if (value === 'promote') {
            let data = fullrestorants.filter((restorent) => {
                return restorent.data.promoted.toString() === 'true';
            })
            setrestorants(data);
        }
        if (value === 'non-promote') {
            let data = fullrestorants.filter((restorent) => {
                return restorent.data.promoted.toString() === 'false';
            })
            setrestorants(data);
        }
    }

    function filterData(searchvalue, restorents) {
        const data = fullrestorants.filter((restorent) => {
            return restorent.data.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
        })
        return data;
    }


    return (
        <>

            <input placeholder='abc'
                onChange={(e) => { setSearchValue(e.target.value) }}
                value={searchvalue} />

            <button
                onClick={() => {
                    const data = filterData(searchvalue, restorants)
                    setrestorants(data);
                }}

            >search</button>
            {/* <button
                onClick={()=>{promoeornot}}
            ><BiSortDown/></button> */}
            <select name="sort" id=""
                onChange={(e) => {
                    promotrornot(e.target.value);
                    // console.log(e.target.value);
                }}
            >
                <option value="all">all</option>
                <option value="promote">promote</option>
                <option value="non-promote">non-promote</option>

            </select>
            <div className="restorent__container">
                <div className='contain'>

                    {restorants.map(card => {
                        let ref = '/RESTORENTS/' + card.data.id;
                        return <Link to={ref} ><Card data={card} key={card.data.id} /></Link>
                    })}
                </div>
            </div>
        </>);
}

export default Body;