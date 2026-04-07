import styles from "./styles.module.css";
import Shelf from "../Shelf";

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

  return (
    <div className={styles.BookShelf}>
      {Generos.map(element =>(
        <Shelf key={element} genre={element}/>
      ))}
    </div>
  );
}
