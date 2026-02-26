import Form from "../../components/Forms";
import styles from "./styles.module.css";
import Logo from "../../assets/Logo.png";

export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <figure className={styles.figure}/>
        <div className={styles.info}>
          <figure className={styles.Logo}>
            <img src={Logo} />
          </figure>
          <section className={styles.text}>
            <h2>Bem vindo(a)!</h2>
            <h1>Entre na sua conta</h1>
          </section>
          <Form />
        </div>
      </div>
    </>
  );
}
