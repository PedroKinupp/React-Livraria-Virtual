import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookService } from "../../services/BookService";
import type { BookType } from "../../types/BookType";
import Header from "../../components/Header";
import BookCard from "../../components/BookCard";
import styles from "./styles.module.css";

export default function GenrePage() {
  const { Genre } = useParams();
  const [books, setBook] = useState<BookType[]>([]);

  async function loadBook(Genre: string | undefined) {
    if (Genre) {
      const response = await BookService.getByGenre(Genre, "");
      setBook(response);
    }
  }

  useEffect(() => {
    loadBook(Genre);
  }, []);
  return (
    <>
      <Header />
      <h1>Pagina dos Genero: {Genre}</h1>
      <div className={styles.container}>
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
          <h1 className={styles.errorMessage}>Genero não encontrado :(</h1>
        )}
      </div>
    </>
  );
}
