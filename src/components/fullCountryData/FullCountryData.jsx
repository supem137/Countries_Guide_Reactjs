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
  }, [cca3, dispatch]);

  return (
    <>
      <Second_Header />
      <Link to="/" className={styles.backLink}>
        <button className={styles.backButton}>Back</button>
      </Link>
      {countryDataByCode.length !== 0 &&
        countryDataByCode.map((element, index) => (
          <div key={index} className={styles.container}>
            <div
              className={styles.flag}
              style={{ backgroundImage: `url(${element.flags.png})` }}
            />
            <div className={styles.details}>
              <h1 className={styles.name}>{element.name.common}</h1>
              <p className={styles.officialName}>
                Official Name:{' '}
                {element.name.nativeName
                  ? Object.values(element.name.nativeName)[0].official
                  : element.name.official}
              </p>
              <p className={styles.capital}>Capital: {element.capital}</p>
              <p className={styles.region}>Region: {element.region}</p>
              <p className={styles.population}>
                Population: {element.population.toLocaleString()}
              </p>
              <p className={styles.subregion}>Subregion: {element.subregion}</p>
              <p className={styles.tld}>
                Top Level Domain: {element.tld.join(', ')}
              </p>
              <p className={styles.currencies}>
                Currencies:{' '}
                {element.currencies
                  ? Object.values(element.currencies)
                      .map((currency) => currency.name)
                      .join(', ')
                  : 'None'}
              </p>
              <p className={styles.languages}>
                Languages:{' '}
                {element.languages
                  ? Object.values(element.languages).join(', ')
                  : 'None'}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}

export default FullCountryData;
