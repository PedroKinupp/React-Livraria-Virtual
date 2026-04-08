import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./styles.module.css";
import back from "../../assets/backIcon.png";
import { useBooksByID } from "../../hooks/useBooksByID";
import LoadingMsg from "../../components/loadingMsg";
import ErrorMsg from "../../components/errorMsg";

export default function BookDetails() {
  const navigate = useNavigate()
  const { bookID } = useParams();
  const { data, isLoading, isError, isSuccess } = useBooksByID(Number(bookID));

  return (
    <>
      <Header />
      <main>
        <div className={styles.box}>
          <button onClick={() => navigate(-1)}className={styles.goBack}>
            <img src={back} className={styles.back}/>
            Detalhes do Livro
          </button>

          {isLoading ? 
            <div className={styles.msg}>
              <LoadingMsg/>
            </div> : <></>}

          {isError ? 
            <div className={styles.msg}>
              <ErrorMsg/>
            </div> : <></>}

          {isSuccess ? 
            <>
              <div className={styles.container}>
              <figure className={styles.frame}>
                <img src={data?.capa} className={styles.cover}/>
              </figure>
              <div className={styles.info}>
                <section className={styles.header}>
                  <p className={styles.title}>{data?.titulo}</p>
                  <p className={styles.author}>{data?.autor}</p>
                </section>
                <article className={styles.article}>
                  <h3 className={styles.intro}>Sinopse</h3>
                  <p className={styles.synopsis}>{data?.sinopse}</p>
                </article>
              </div>
            </div>
            <button className={styles.addCart}>
              <span>R$ {data?.preco}</span>
              <span>Adicionar ao carrinho</span>
            </button>
            </> : <></>
          }
        </div>
      </main>
    </>
  );
}
