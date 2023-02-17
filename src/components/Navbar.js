import './nav.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="http://127.0.0.1:8000/admin/">Admin</Link>
        </li>
        <li>
          <Link to="/addQuestions">Add Questions</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
