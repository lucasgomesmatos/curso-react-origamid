import { useState } from 'react';
import { Button } from './components/Button';

export const App = () => {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </div>
  );
};
