import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export default function LoadingMsg(){
    const [dots, setDots] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev == 3 ? 0 : prev + 1));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <p className={styles.mesage}>Carregando{".".repeat(dots)}</p>
    )
}