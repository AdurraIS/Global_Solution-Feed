import styles from "./menu.module.css";

export default function menu() {
    return (
      <>
      <nav class={styles.navbar}>
        <h1 class={styles.logo}>Solution Feed</h1>
        <ul class={styles.listnavbar}>
            <li class={styles.itemslink}> 
                Inovações |
            </li>
            <li class={styles.itemslink}>
                Distribuição |
            </li>
            <li class={styles.itemslink}>
                Noticias |
            </li>
            <li class={styles.itemslink}> 
                Contato
            </li>
        </ul>
      </nav>
      </>
    );
  }