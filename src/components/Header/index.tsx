import Logo from "../../assets/Logo.png";
import LoginIcon from "../../assets/LoginIcon.png";
import CartIcon from "../../assets/cartIcon.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainButton}>
        <Link to='/home'>
          <figure>
            <img src={Logo} />
          </figure>
        </Link>
      </div>
      <div className={styles.buttons}>
        <button>
          <img src={LoginIcon} />
        </button>
        <button>
          <img src={CartIcon} />
        </button>
      </div>
    </header>
  );
}
