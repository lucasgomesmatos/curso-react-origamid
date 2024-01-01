import React from 'react';

interface ButtonProps {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export const Button = ({ setTotal, total }: ButtonProps) => {
  return (
    <button onClick={() => setTotal((total) => total + 1)}>
      Incrementar {total}
    </button>
  );
};
