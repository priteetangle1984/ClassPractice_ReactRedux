import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Welcome</div>
      </Link>
      <Link to="/useref">
        <div>useRef Example</div>
      </Link>
      <Link to="/usereducer">
        <div>useReducer Example</div>
      </Link>
      <Link to="/usecontext">
        <div>useContext Example</div>
      </Link>
    </div>
  );
}

export default Nav;
