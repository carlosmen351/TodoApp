import React from 'react';

export function useLocalStorage(nameItem, initialValue) {
  const [item, setTItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = sessionStorage.getItem(nameItem);
        let parsedItem;
        if (!localStorageItem) {
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setTItem(parsedItem);
        }
        setLoading(false)
      } catch {
        setError(true);
        setLoading(false);
      }
    }, 1000);
  }, [nameItem, initialValue]);

  const saveItem = (newItems) => {
    sessionStorage.setItem(nameItem, JSON.stringify(newItems))
    setTItem(newItems);
  }
  return {item, saveItem, loading, error};
}