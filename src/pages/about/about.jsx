import React from 'react'
import {useDispatch} from 'react-redux';
import {addItem} from '../../utils/cartSlice'

function About(){
    const dispatch = useDispatch()
    function handleAddItem(){
        dispatch(addItem('grapes'));
    }
    return(
        <>
            <h1>hello eveoryone in about</h1>
            <button  onClick={()=>{handleAddItem()}} >add items</button>
        </>
    )
}
export default About;