import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>MyLogo</h2>
      <div>
        <Link to="/food" style={styles.link}>Food</Link>
        <Link to="/recipe" style={styles.link}>Recipe</Link>
        <Link to="/clothes" style={styles.link}>Clothes</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#222",
    color: "white",
  },
  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
  },
};

export default Navbar;
