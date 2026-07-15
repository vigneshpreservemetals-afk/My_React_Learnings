

import React, { useState } from "react"

export default function LocalDateTime() {

const[currentDateTime,setCurrentDateTime] = useState("");

const ShowCurrentDateTime = () => {

  const CurrentTimeZone = new Date () ;

  const LocalTimeZone   = CurrentTimeZone.toLocaleString();

  setCurrentDateTime(LocalTimeZone);
}

return(

  <div>

    <h3> {currentDateTime} </h3>

    <button onClick={ShowCurrentDateTime}> Current Date & Time </button>

  </div>
)
}



