import { useAuth } from "../../context/auth/authProvider";
import styles from "./authcomponent.module.css";

const AuhtComponent = ({ title }) => {
  const auth = useAuth();
  return (
    <section className={styles.authHolder}>
      <h2> {title} </h2>
      <main className={styles.authContainer}>
        <ul className={styles.listContainer}>
          <li> {auth.name}</li>
          <li> {auth.email}</li>
          <li> {auth.phoneNumber}</li>
        </ul>
      </main>
    </section>
  );
};

export default AuhtComponent;
