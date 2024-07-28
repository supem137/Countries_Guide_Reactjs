import FilterData from '../filter/FilterData';
import SearchCountry from '../search/SearchCountry';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <span onClick={() => window.location.reload(true)} className="logo">
        Countries Guide
      </span>
      <div className="options">
        <SearchCountry />
        <FilterData />
      </div>
    </header>
  );
}

export default Header;
