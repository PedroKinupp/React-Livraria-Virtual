import BookShelf from "../../components/BookShelf";
import Header from "../../components/Header";
import styles from './styles.module.css'
import BannerDiscount from '../../assets/BannerDiscount.png'


export default function Home() {


  return (
    <>
      <Header />
      <div className={styles.container}>
        <figure className={styles.discount}>
          <img src={BannerDiscount} className={styles.discountImg}/>
        </figure>
        <BookShelf/>
      </div>
    </>
  );
}
