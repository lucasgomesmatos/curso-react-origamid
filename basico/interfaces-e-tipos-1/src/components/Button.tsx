import React from 'react';

export const Button = ({ children }: React.PropsWithChildren) => {
  const handleClick = (event: React.MouseEvent) => {
    console.log(event.pageX);
  };

  return <button onClick={handleClick}>{children}</button>;
};
