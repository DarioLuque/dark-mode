import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const [ darkModeSet, setDarkModeSet ] = useLocalStorage("darkmode");

  useEffect(() => {

    if (darkModeSet === true) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }

  },[darkModeSet]);

  return [darkModeSet, setDarkModeSet];
}