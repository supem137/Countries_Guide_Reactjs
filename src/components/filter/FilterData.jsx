import { useDispatch, useSelector } from 'react-redux';
import { setFilterOption } from '../../app/store/reducers/dataSlice';

function FilterData() {
  const { filterOption } = useSelector((state) => state.APIcountriesData);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    console.log(e.target.value);
    dispatch(setFilterOption(e.target.value));
  };

  return (
    <>
      <select
        onChange={changeHandler}
        value={filterOption}
        className="filter-bar"
      >
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
      </select>
    </>
  );
}

export default FilterData;
