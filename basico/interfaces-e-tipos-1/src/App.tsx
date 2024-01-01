import { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';

export const App = () => {
  const [total, setTotal] = useState(0);

  function increment() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button>Incrementar</Button>
      <Input label="Nome" id="nome" />
      <Input label="Email" id="email" />
    </div>
  );
};
