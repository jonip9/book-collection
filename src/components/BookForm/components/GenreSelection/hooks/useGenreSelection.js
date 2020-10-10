import { useState, useCallback } from 'react';

function useGenreSelection() {
  const [genres, setGenres] = useState([]);

  const genreChecked = useCallback((e) => {
    const target = e.target;
    const value = target.value;

    if (!target.checked) {
      setGenres(genres.filter(item => item !== value));
    } else {
      setGenres(state => ([...state, value]))
    }
  }, [genres]);

  return { genres, genreChecked };
}

export default useGenreSelection;