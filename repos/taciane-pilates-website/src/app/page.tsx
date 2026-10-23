import { Container } from '~/components';

import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Container wrap>
        <p className={styles.kicker}>Estúdio de Pilates</p>
        <h1 className={styles.title}>Taciane Martins</h1>
        <p className={styles.lead}>Base do website pronta.</p>
      </Container>
    </main>
  );
}
