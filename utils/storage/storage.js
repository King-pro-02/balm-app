import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorage = async (key, readings) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(readings));
  } catch (error) {
    console.error("Error saving readings:", error);
    throw error;
  }
};

export const getStorage = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error retrieving readings:", error);
    throw error;
  }
};
