import { useState } from "react";

const useBloodGlucose = () => {
  const [readings, setReadings] = useState([]);

  console.log (readings)
  console.log (readings[0])
  const addReading = (item) => {
    const newReading = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setReadings((currentReadings) => [...currentReadings, newReading]);
  };

  return { readings, addReading };
};

export default useBloodGlucose;