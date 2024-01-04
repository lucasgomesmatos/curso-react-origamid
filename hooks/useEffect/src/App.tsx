import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    console.log('Montou');

    return () => {
      console.log('Desmontou');
    };
  }, []);

  return <div>App</div>;
};
