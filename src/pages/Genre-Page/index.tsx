import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookService } from "../../services/BookService";
import type { BookType } from "../../types/BookType";
import searchIcon from "../../assets/searchIcon.png";
import backIcon from "../../assets/backIcon.png";
import Header from "../../components/Header";
import BookCard from "../../components/BookCard";
import styles from "./styles.module.css";

export default function GenrePage() {
  const { Genre } = useParams();
  const [books, setBook] = useState<BookType[]>([]);
  const [search, setSearch] = useState<string>("");

  async function loadBook(Genre: string | undefined, search: string) {
    if (Genre) {
      const response = await BookService.getByGenre(Genre, search);
      setBook(response);
    }
  }

  useEffect(() => {
    loadBook(Genre, search);
  }, [Genre, search]);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <img src={searchIcon} />
          <input
            className={styles.input}
            placeholder="Pesquisar por título"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.main}>
          <button className={styles.button}>
            <img src={backIcon} />
            {Genre}
          </button>
          <div className={styles.box}>
            {books.length > 0 ? (
              books?.map((book) => (
                <ul key={book.id}>
                  <BookCard
                    autor={book.autor}
                    capa={book.capa}
                    preco={book.preco}
                    titulo={book.titulo}
                    isCompact={false}
                  />
                  <br />
                </ul>
              ))
            ) : (
              <h1 className={styles.errorMessage}>Livro não encontrado :(</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
