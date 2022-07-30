import { useState } from "react";
import { Link } from "react-router-dom";
import AuhtComponent from "../../components/auth component/authComponent";
import { useAuth } from "../../context/auth/authProvider";
import styles from "./profile.module.css";
import { MdMenu, MdClose } from "react-icons/md";

const Profile = () => {
  const [isShow, setIsShow] = useState(false);
  const auth = useAuth();
  const redirect = "/login?redirect=/profile";
  
  return (
    <section className={styles.profileHolder}>
      {auth ? (
        <>
          <div className={styles.accsesMenu}>
            <span
              onClick={() => setIsShow(!isShow)}
              className={styles.toggleModal}>
              {isShow ? <MdClose /> : <MdMenu />}
            </span>
            <ul
              className={`${styles.listContainer} ${
                isShow && styles.openModal
              }`}>
              <li>
                <Link to='#'> dashboard </Link>
              </li>
              <li>
                <Link to='#'> payment </Link>
              </li>
              <li>
                <Link to='/cart'> shopping cart </Link>
              </li>
              <li>
                <Link to='#'> History </Link>
              </li>
            </ul>
          </div>
          <AuhtComponent title={"Profile Page"} />
        </>
      ) : (
        <div style={{ margin: "1rem auto" }}>
          <Link to={redirect}> Please Log In First </Link>
        </div>
      )}
    </section>
  );
};

export default Profile;
