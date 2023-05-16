import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCountriesData,
  fetchSearchedCountriesData,
  reset,
} from '../../app/store/reducers/dataSlice';

import Card from '../card/Card';

function CountriesData() {
  const {
    countriesData,
    loading,
    error,
    searchName,
    errorMessage,
    filterOption,
  } = useSelector((state) => state.APIcountriesData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchName) {
      dispatch(fetchSearchedCountriesData(searchName));
    } else {
      dispatch(fetchAllCountriesData());
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, searchName]);

  const data =
    filterOption === 'All'
      ? countriesData
      : countriesData.filter((element) =>
          element.region.includes(filterOption)
        );

  return (
    <>
      {error === true && errorMessage}
      {loading === true && <h1>Loading....</h1>}
      {countriesData.length !== 0 && console.log(countriesData)}

      <Card data={data} />
    </>
  );
}

export default CountriesData;
