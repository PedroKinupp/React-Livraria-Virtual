import { useParams } from "react-router-dom";
import { BookService } from "../../services/BookService";
import { useEffect, useState } from "react";
import type { BookType } from "../../types/BookType";
import Header from "../../components/Header";
import styles from "./styles.module.css";
import back from "../../assets/back.png";

export default function BookDetails() {
  const { bookID } = useParams();
  const [book, setBook] = useState<BookType | undefined>();

  async function loadBook(bookID: number) {
    const response = await BookService.getByID(bookID);
    setBook(response);
  }

  useEffect(() => {
    loadBook(Number(bookID));
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={styles.box}>
          <button className={styles.goBack}>
            <img src={back} />
            Detalhes do Livro
          </button>
          <div className={styles.container}>
            <figure>
              <img src={book?.capa} />
            </figure>
            <div className={styles.info}>
              <section className={styles.header}>
                <h1>{book?.titulo}</h1>
                <h2>{book?.autor}</h2>
              </section>
              <article className={styles.article}>
                <h3>Sinopse</h3>
                <p>{book?.sinopse}</p>
              </article>
            </div>
          </div>
          <button className={styles.addCart}>
            <span>R$ {book?.preco}</span>
            <span>Adicionar ao carrinho</span>
          </button>
        </div>
      </main>
    </>
  );
}
