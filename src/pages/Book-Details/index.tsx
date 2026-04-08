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
            <img src={back}/>
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
              <figure>
                <img src={data?.capa} />
              </figure>
              <div className={styles.info}>
                <section className={styles.header}>
                  <h1>{data?.titulo}</h1>
                  <h2>{data?.autor}</h2>
                </section>
                <article className={styles.article}>
                  <h3>Sinopse</h3>
                  <p>{data?.sinopse}</p>
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
