import React, { ComponentProps, useState } from 'react';

interface CheckboxProps extends ComponentProps<'input'> {
  label: string;
  id: string;
}

export const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setChecked(event.currentTarget.checked);
  };

  return (
    <label
      style={{
        padding: '1rem',
        border: checked ? '1px solid #8d2' : '1px solid #f70',
      }}
      htmlFor={rest.id}
    >
      <input
        type="checkbox"
        {...rest}
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};
