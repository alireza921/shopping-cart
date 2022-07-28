import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./submena.module.css";
const SubMena = () => {
  const [isShow, setIsShow] = useState(false);
  const logoutHandler = () => {
    if (window.confirm("Do You want to Logout ?!") == true) {
      localStorage.removeItem("authState");
      console.log("delet");
    }
  };
  return (
    <>
      <button onClick={() => setIsShow(!isShow)} className={styles.open}>
        <span>
          <IoMdArrowDropdown />
        </span>
      </button>
      <ul className={`${styles.subMenu} ${isShow ? styles.show : styles.hide}`}>
        <li>
          <Link to='/profile'> account </Link>
        </li>
        <li>
          <button onClick={logoutHandler} className={styles.logout}>
            Logout
          </button>
        </li>
      </ul>
    </>
  );
};

export default SubMena;
