import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import type { BookType } from "../../types/BookType";
import { BookService } from "../../services/BookService";
import BookCard from "../BookCard";
import { Link } from "react-router-dom";

const Generos = [
  "Best-sellers",
  "Clássicos",
  "Infantil",
  "Fantasia",
  "Suspense",
  "Distopia",
  "Ficção Científica",
];

export default function BookShelf() {
  const [books, setBook] = useState<BookType[][]>([]);

  async function loadBooks() {
    const responses = await Promise.all(
      Generos.map((element) => BookService.getByGenre(element, "", 4)),
    );

    setBook(responses);
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className={styles.bookShelf}>
      {books.map((bookByGenre, index) => (
        <section key={index} className={styles.shelf}>
            <div className={styles.header}>
                <h1>{Generos[index]}</h1>
                <Link to={`/GenrePage/${Generos[index]}`} className={styles.link}>Ver mais</Link>
            </div>
            <div className={styles.booksByGenre}>
            {bookByGenre.map((book) => (
                <ul key={book.id}>
                <BookCard
                    autor={book.autor}
                    capa={book.capa}
                    preco={book.preco}
                    titulo={book.titulo}
                    isCompact={true}
                    id={book.id}
                />
                </ul>
            ))}
            </div>
        </section>
      ))}
    </div>
  );
}
