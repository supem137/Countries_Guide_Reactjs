import FilterData from '../filter/FilterData';
import SearchCountry from '../search/SearchCountry';
import '../header/Header.css';

function Header() {
  return (
    <div className="container">
      <span onClick={() => window.location.reload(true)} className="logo">
        Countries Guide
      </span>
      <div className="options">
        <SearchCountry />
        <FilterData />
      </div>
    </div>
  );
}

export default Header;
