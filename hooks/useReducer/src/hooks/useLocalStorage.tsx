import { useEffect, useState } from 'react';

export const useLocalStorage = (
  key: string,
  initialValue: string,
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || initialValue,
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState] as const;
};
