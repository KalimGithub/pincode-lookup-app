import React, { useState } from "react";
import PostContext from "./PostContext";

const Postprovider = (props)=>{
    const [post, setPost] = useState({
        name:"Ausa",
        pincode: "413520"
    });

    return(
        <PostContext.Provider value={{post,setPost}}>
            {props.children}
        </PostContext.Provider>
    )
}



export default Postprovider;