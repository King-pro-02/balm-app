import { useState, useEffect } from "react";
import { getStorage, setStorage } from "../utils/storage/storage";
import { Key } from "../utils/storage/key";
import * as Haptics from "expo-haptics";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useBloodGlucose = () => {
  const [readings, setReadings] = useState([]);

  
useEffect(()=> {
  getReadings();
}, [readings])
  const getReadings = async () => {
    const data = await getStorage(Key.BG_READINGS_STORAGE_KEY);
    setReadings(data || [])
  };

  const addReading = async (item) => {
    const newReading = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    const updatedReadings = [newReading, ...readings];
    await setStorage(Key.BG_READINGS_STORAGE_KEY, updatedReadings);
    setReadings(updatedReadings);
  };

  const deleteReading = async (id) => {
    const filtered = readings.filter((item)=> item.id !== id)
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
    await setStorage(Key.BG_READINGS_STORAGE_KEY, filtered);
    getReadings();
  };
  const clearReadings = async () => {
    await setStorage(Key.BG_READINGS_STORAGE_KEY, [])
  };

  return { readings, addReading, deleteReading, clearReadings };
};

export default useBloodGlucose;