import { Link, useParams } from "react-router-dom";
import searchIcon from "../../assets/searchIcon.png";
import backIcon from "../../assets/backIcon.png";
import Header from "../../components/Header";
import BookCard from "../../components/BookCard";
import styles from "./styles.module.css";
import { useBooksByGenre } from "../../hooks/useBooksByGenre";
import { useEffect, useState } from "react";
import type { BookType } from "../../types/BookType";

export default function GenrePage() {
  const { Genre } = useParams();
  const { data } = useBooksByGenre(Genre);
  const [search, setSearch] = useState<string>("");
  const [books, setBooks] = useState<BookType[]>([]);

  function checkName(book: BookType) {
    return book.titulo.toLowerCase().includes(search.toLowerCase());
  }

  useEffect(() => {
    setBooks(data ? data.filter(checkName) : []);
  }, [search, data]);

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
          <Link to='/Home' className={styles.link}>
            <button className={styles.button}>
              <img src={backIcon} />
              {Genre}
            </button>
          </Link>
          <div className={styles.box}>
            {books?.map(book => (
                <ul key={book.id}>
                  <BookCard
                    autor={book.autor}
                    capa={book.capa}
                    preco={book.preco}
                    titulo={book.titulo}
                    isCompact={false}
                    id={book.id}
                  />
                  <br />
                </ul>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
