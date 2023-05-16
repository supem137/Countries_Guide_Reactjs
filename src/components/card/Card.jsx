import { Link } from 'react-router-dom';
import styles from '../card/card.module.css';

function Card({ data }) {
  return (
    <div className={styles.main_container}>
      {data.length !== 0 &&
        data.map((element, index) => (
          <div key={index} className={styles.container}>
            <Link key={index} to={`${element.cca3}`}>
              <img className={styles.flag} src={element.flags.png} />
              <div className={styles.details}>
                <p className={styles.name}>{element.name.common}</p>
                <p className={styles.capital}>Capital: {element.capital}</p>
                <p className={styles.region}>Region: {element.region}</p>
                <p className={styles.population}>
                  Population: {element.population}
                </p>
              </div>
            </Link>
            {/* {console.log(index)}
            {console.log(element.name)}
            {console.log(Object.values(element.name.nativeName)[0].official)} */}
          </div>
        ))}
    </div>
  );
}

export default Card;
