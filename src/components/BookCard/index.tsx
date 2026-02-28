import styles from './styles.module.css'

interface PropsType{
    capa?: string
    titulo?: string
    autor?: string
    preco?: number
    isCompact?: boolean
    onclick?: () => void
}

export default function BookCard(props : PropsType){
    return(
        <button onClick={props.onclick}>
            <div className={props.isCompact? styles.narrowContainer : styles.wideContainer}>
                <figure className={styles.cover}>
                    <img src={props?.capa}  className={props.isCompact? styles.narrowCover : styles.wideCover}/>
                </figure>
                <div className={props.isCompact? styles.narrowInfo : styles.wideInfo}>
                    <div className={styles.header}>
                        <h1>{props?.titulo}</h1>
                        <p>{props?.autor}</p>
                    </div>
                    <span className={props.isCompact? styles.narrowPrice : styles.widePrice}>R$ {props?.preco}</span>
                </div>
            </div>
        </button>
    )
}