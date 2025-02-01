import React, { useState, useEffect } from "react";

function Clock() {
  // Initialize state with the current date
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every minute (60,000 ms)
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 60000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  // Format the time to show hours and minutes
const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Set hour12 to false for 24-hour format
});
   

  return <span>{formattedTime}</span>;
}

export default Clock;
