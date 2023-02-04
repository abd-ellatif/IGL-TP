import React from "react";


export default function Map (props) {
   

  let location = props.location 
 
  let source = "https://maps.google.com/maps?q="+location+"&t=&z=13&ie=UTF8&iwloc=&output=embed"
  console.log(source)


  return <div><iframe
  src={source}
  width="450"
  height="600"
  style={{border: "0"}}
  allowfullscreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe></div> 

}