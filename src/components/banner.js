import * as React from "react";
const styles ={
    witdh:150,
    borderWidth:5,
    borderColor:"white",
    borderStyle: "double",
    backgroundColor:"red",
    textAlign:"center",
    minHeight:200
}
const Banner =()=>{
    return(
        <div style={styles}>
            <p>Soy la publicidad</p>
        </div>
    )
}
export default Banner;