import React from 'react'
import { useRouteError } from 'react-router-dom';

function Error(){
    let err=useRouteError();
    console.log(err);
    return(
        <>
            {/* {err.r.status}
            {err.r.error.message} */}
            <h1>oops! you got an error</h1>
            <p>error is  and statuscode is {err.statusText} ,{err.status} </p>
        </>
    );
}
export default Error;
