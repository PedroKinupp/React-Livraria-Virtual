import { Link } from "react-router-dom";
import { useBooksByGenre } from "../../hooks/useBooksByGenre";
import BookCard from "../BookCard";
import styles from './styles.module.css'
import LoadingMsg from "../loadingMsg";
import ErrorMsg from "../errorMsg";

type ShelfProps = {
  genre: string;
};

const booksPerGenre = 4

export default function Shelf({ genre }: ShelfProps) {
    const { data, isLoading, isError } = useBooksByGenre(genre, booksPerGenre);

    if (isLoading) {
        return (
        <section className={styles.shelf}>
            <div className={styles.header}>
                <h1 className={styles.title}>{genre}</h1>
            </div>
            <div className={styles.msg}>
                <LoadingMsg/>
            </div>
        </section>
        );
    }

    if (isError) {
        return (
        <section className={styles.shelf}>
            <div className={styles.header}>
                <h1 className={styles.title}>{genre}</h1>
            </div>
            <div className={styles.msg}>
                <ErrorMsg/>
            </div>
        </section>
        );
    }

    return (
        <section className={styles.shelf}>
            <div className={styles.header}>
                <h1 className={styles.title}>{genre}</h1>
                <Link to={`/GenrePage/${genre}`} className={styles.link}>Ver mais</Link>
            </div>
            <div className={styles.books}>
            {data?.map((book) => (
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
    );
}