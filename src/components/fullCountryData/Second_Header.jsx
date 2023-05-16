import { Link } from 'react-router-dom';
import '../header/Header.css';

function Second_Header() {
  return (
    <div className="container">
      <Link to="/">
        <span className="logo">Countries Guide</span>
      </Link>
    </div>
  );
}

export default Second_Header;
