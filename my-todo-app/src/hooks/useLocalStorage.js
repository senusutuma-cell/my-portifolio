import { useEffect } from "react";

export function useLocalStorage(key, state) {
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error saving key "${key}" to localStorage:`, error);
    }
  }, [key, state]);
}

export function getStorageValue(key, defaultValue) {
  try {
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error(`Error reading key "${key}" from localStorage:`, error);
  }
  return defaultValue;
}