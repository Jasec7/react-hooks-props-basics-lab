import React from 'react'

function Links(props){
    
    return(
        <div style={{ textAlign: "center" }}>
          <h3> Links </h3>
          <a href={props.github} style={{ display: "block"}}> {props.github}</a>
          <a href={props.linkedin} style={{ display: "block" }}> {props.linkedin} </a>

    </div>
    )
}

export default Links
