import { useState, useEffect } from "react";

export const useLocalStorage = (key) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [key]);

  const setLocalStorageData = (value) => {
    setData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const clearLocalStorageData = () => {
    setData(null);
    localStorage.removeItem(key);
  };

  return [data, setLocalStorageData, clearLocalStorageData];
};

export default useLocalStorage;
