import { useState, useEffect } from "react";
import { Key } from "../utils/storage/key";
import { getStorage, setStorage } from "../utils/storage/storage";
import * as Haptics from "expo-haptics";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useBloodPressure = () => {
  const [readings, setReadings] = useState([]);

 
  useEffect(() => {
    getReadings();
  }, [readings]);

  const getReadings = async () => {
    const data = await getStorage(Key.BP_READINGS_STORAGE_KEY);
    setReadings(data || []);
  };

  const addReading = async (item) => {
    const newReading = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    const updatedReadings = [newReading, ...readings];
    await setStorage(Key.BP_READINGS_STORAGE_KEY, updatedReadings);
    setReadings(updatedReadings);
  };

  const deleteReading = async (id) => {
    const filtered = readings.filter((item) => item.id !== id);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    await setStorage(Key.BP_READINGS_STORAGE_KEY, filtered);
    getReadings();
  };

  const clearReadings = async () => {
    const previousReadings = readings;
    setReadings([]);

    try {
      await setStorage(Key.BP_READINGS_STORAGE_KEY, []);
    } catch (error) {
      setReadings(previousReadings);
      console.error("Failed to clear readings:", error);
    }
  };

  return { readings, addReading, deleteReading, clearReadings };
};

export default useBloodPressure;
