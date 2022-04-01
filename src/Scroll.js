import React from "react";

const Scroll=(props)=>{
return(
    <div style={{overflowY:'scroll',border:'1px solid rgb(13, 89, 124)',height:'500px'}}>
       {props.children};
    </div>
)
}
export default Scroll;