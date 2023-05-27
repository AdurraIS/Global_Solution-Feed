import styles from "./menu.module.css";
import { Link } from 'react-router-dom';

export default function menu() {
    return (
      <>
      <nav class={styles.navbar}>
        <Link to="/" ><h1 class={styles.logo} >Solution Feed</h1></Link>
        <ul class={styles.listnavbar}>
            <li class={styles.itemslink}> 
                Inovações |
            </li>
            <li class={styles.itemslink}>
                Distribuição |
            </li>
            <li class={styles.itemslink}>
            <Link to="/noticias" > Noticias </Link>|
            </li>
            <li class={styles.itemslink}> 
                Contato
            </li>
        </ul>
      </nav>
      </>
    );
  }