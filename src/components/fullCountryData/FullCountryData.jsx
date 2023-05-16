import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchFullDataByCode } from '../../app/store/reducers/dataSlice';
import styles from './FullCountryData.module.css';
import Second_Header from './Second_Header';

function FullCountryData() {
  const { countryDataByCode } = useSelector((state) => state.APIcountriesData);
  const dispatch = useDispatch();

  const { cca3 } = useParams();

  useEffect(() => {
    dispatch(fetchFullDataByCode(cca3));
  }, [cca3]);

  return (
    <>
      <Second_Header />
      {countryDataByCode.length !== 0 && console.log(countryDataByCode)}
      {/* fix native name - brazil */}
      <Link to="/">
        <input className={styles.back_button} type="button" value="back" />
      </Link>
      {countryDataByCode.length !== 0 &&
        countryDataByCode.map((element, index) => (
          <div key={index} className={styles.container}>
            <img className={styles.flag} src={element.flags.png} />
            <div className={styles.details_1}>
              <p className={styles.name}>{element.name.common}</p>
              <p className={styles.official_name}>
                Official Name:
                {element.name.nativeName !== undefined
                  ? Object.values(element.name.nativeName)[0].official
                  : element.name.official}
              </p>
              <p className={styles.capital}>Capital: {element.capital}</p>
              <p className={styles.region}>Region: {element.region}</p>
              <p className={styles.population}>
                Population: {element.population}
              </p>
              <p className={styles.subregion}>Subregion: {element.subregion}</p>
            </div>

            <div className={styles.details_2}>
              <p className={styles.tld}>Top Level Domain: {element.tld}</p>
              <p className={styles.currencies}>
                Currencies:
                {element.currencies !== undefined
                  ? Object.values(element.currencies)[0].name
                  : ` Null`}
              </p>
              <p className={styles.languages}>
                Languages:
                {element.currencies !== undefined
                  ? Object.values(element.languages).join(' ,')
                  : ` Null`}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}

export default FullCountryData;
