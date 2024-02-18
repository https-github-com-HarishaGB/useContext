import React from "react";

import { useContext } from "react";
import cricketContext from "../useContext/CricketContext";

const Hii = () =>{

    const name = useContext(cricketContext)

    return(
        <div>
            <h1> Hi Cricketers</h1>
              <h2> Hiii: {name} </h2>
              <hr/>
        </div>
    )
}

export default Hii;