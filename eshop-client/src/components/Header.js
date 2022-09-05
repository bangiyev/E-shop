import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header">
        <nav>
          <Link to="/">
            <button className="logoHome">COMPANY NAME</button>
          </Link>
          <Link to="/login">
            <button className="headerButton">Log in</button>
          </Link>
          <Link to="/cart">
            <button className="headerButton"> Cart</button>
          </Link>
        </nav>
      </section>
      <div className="homeNav">
        <Link className="homeNavLink" to="/new-arrivals">
          NEW ARRIVALS
        </Link>
        <Link className="homeNavLink" to="/on-sale">
          ON SALE
        </Link>
        <Link className="homeNavLink" to="/credits">
          CREDITS
        </Link>
      </div>
    </>
  );
};

export default Header;
/* 
instead of the button with company name.
<Link className="logoHome" to="/">
{" "}
COMPANY NAME
</Link>
*/
