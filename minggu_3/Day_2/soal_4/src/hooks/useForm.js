import { useState } from "react";

export default function useForm(initialValue = {}) {
  const [values, setValues] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const resetForm = () => setValues(initialValue);

  return { values, handleChange, resetForm };
}
