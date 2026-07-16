import React, { useState } from "react";


export default function LocalDateTime() {

const[localDateTime,setLocalDateTime] = useState("");

const showLocalDateTime = () => {

  const CurrentTimeZone = new Date();

  const LocalTimeZone   = CurrentTimeZone.toLocaleString();

  setLocalDateTime(LocalTimeZone);
}

return(

  <div>

    <h3> {localDateTime} </h3>

    <button onClick={showLocalDateTime}> Current Date & Time </button>
  </div>
)
}