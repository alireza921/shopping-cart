import { Link } from "react-router-dom";
import styles from "./navigation.module.css";
const Navigation = () => {
  return (
    <header className={styles.holderNavigatin}>
      <nav>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <Link to='/'> Home </Link>
          </li>
          <li className={styles.listItem}>
            <Link to='/cart'> Cart </Link>
          </li>
          <li> 
            <span> 
                salam
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
