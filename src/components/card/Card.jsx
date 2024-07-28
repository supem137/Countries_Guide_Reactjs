import { Link } from 'react-router-dom';
import styles from '../card/card.module.css';

function Card({ data }) {
  return (
    <div className={styles.mainContainer}>
      {data.length !== 0 &&
        data.map((element, index) => (
          <div key={index} className={styles.cardContainer}>
            <Link key={index} to={`${element.cca3}`}>
              <div
                className={styles.flag}
                style={{ backgroundImage: `url(${element.flags.png})` }}
              />
              <div className={styles.details}>
                <p className={styles.name}>{element.name.common}</p>
                <p className={styles.capital}>Capital: {element.capital}</p>
                <p className={styles.region}>Region: {element.region}</p>
                <p className={styles.population}>
                  Population: {element.population.toLocaleString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Card;
