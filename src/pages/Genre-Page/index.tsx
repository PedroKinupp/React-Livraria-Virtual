import { Link, useParams } from "react-router-dom";
import searchIcon from "../../assets/searchIcon.png";
import backIcon from "../../assets/backIcon.png";
import Header from "../../components/Header";
import BookCard from "../../components/BookCard";
import styles from "./styles.module.css";
import { useBooksByGenre } from "../../hooks/useBooksByGenre";
import { useEffect, useState } from "react";
import type { BookType } from "../../types/BookType";
import LoadingMsg from "../../components/loadingMsg";
import ErrorMsg from "../../components/errorMsg";

export default function GenrePage() {
  const { Genre } = useParams();
  const { data, isLoading, isError } = useBooksByGenre(Genre);
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
          <div className={styles.header}>
            <Link to='/Home' className={styles.link}>
              <button className={styles.button}>
                <img src={backIcon} className={styles.goBack}/>
                {Genre}
              </button>
            </Link>
          </div>
          <div className={styles.box}>
            {isLoading ? <LoadingMsg/> : <></>}
            {isError ? <ErrorMsg/> : <></>}
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
