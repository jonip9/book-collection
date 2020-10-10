import { useState, useCallback } from 'react';

function useOnValueChange() {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    published: new Date(),
    genre: [],
  });

  const handleInput = useCallback((e, genres = null) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (genres !== null) {
      /* if (genres.includes(value)) {
        genres.filter(item => item !== value);
      } else {
        genres.push(value);
      } */
      setFormData((state) => ({ ...state, genre: [genres] }))
    } else {
      setFormData((state) => ({ ...state, [name]: value }))
    }
    console.log(formData);

  }, [formData]);

  return { formData, handleInput };
}

export default useOnValueChange;