import { useState } from 'react';

export function Input({ label }) {
  const [value, setValue] = useState('');

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}