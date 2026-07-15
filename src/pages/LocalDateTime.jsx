import React, { useState } from "react";

export default function localDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  const showCurrentDateTime = () => {
    const now = new Date();

    const localDateTime = now.toLocaleString(); // Uses the user's local timezone

    setCurrentDateTime(localDateTime);
  };

  return (
    <div>
      <button onClick={showCurrentDateTime}>
        Show Current Date & Time
      </button>

      <h3>{currentDateTime}</h3>
    </div>
  );
}
