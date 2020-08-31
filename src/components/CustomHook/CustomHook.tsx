import { useState, ChangeEvent } from 'react';

export function useFormInput(initialValue: string | undefined) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

export default {
  useFormInput,
};
