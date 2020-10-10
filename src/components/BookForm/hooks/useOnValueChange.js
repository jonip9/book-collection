import { useState, useCallback } from 'react';

function useOnValueChange() {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    published: new Date(),
    genre: [],
  });

  const handleInput = useCallback((e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (name === 'genre') {
      let genres = formData.genre;
      if (!target.checked) {
        genres = genres.filter(item => item !== value);
        setFormData((state) => ({ ...state, genre: genres }));
      } else {
        genres.push(value);
        setFormData((state) => ({ ...state, genre: genres }));
      }
    } else {
      setFormData((state) => ({ ...state, [name]: value }));
    }

  }, [formData]);

  return { formData, handleInput };
}

export default useOnValueChange;