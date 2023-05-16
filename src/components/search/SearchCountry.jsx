import { useDispatch, useSelector } from 'react-redux';
import { setSearchName } from '../../app/store/reducers/dataSlice';
import { useEffect, useState } from 'react';

function SearchCountry() {
  const { searchName } = useSelector((state) => state.APIcountriesData);
  const dispatch = useDispatch();

  const [debounceName, setDebounceName] = useState(searchName);

  const changeHandler = (e) => {
    setDebounceName(e.target.value);
  };

  const getSearchedData = (n) => {
    dispatch(setSearchName(n));
  };

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      {
        getSearchedData(debounceName);
        console.log(debounceName);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [debounceName]);

  return (
    <>
      <input
        type="text"
        onChange={changeHandler}
        value={debounceName}
        className="search-bar"
        placeholder="Search"
      />
    </>
  );
}

export default SearchCountry;
