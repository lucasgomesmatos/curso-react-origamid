import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

export const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" {...rest} />
    </div>
  );
};
