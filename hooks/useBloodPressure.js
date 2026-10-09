import { useState } from "react";

const useBloodPressure = () => {
  const [readings, setReadings] = useState([]);

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

export default useBloodPressure;
