import * as React from "react";
const styles ={
    width:150,
    borderWidth:5,
    borderColor:"white",
    borderStyle: "double",
    backgroundColor:"red",
    textAlign:"center",
    minHeight:200
}
const Banner =({texto="Desc",url="Desc"})=>{
    return(
        <div style={styles}>
            <p>{texto}</p>
            <p>{url}</p>
        </div>
    )
}
export default Banner;