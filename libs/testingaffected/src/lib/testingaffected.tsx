import styles from './testingaffected.module.css';

/* eslint-disable-next-line */
export interface TestingaffectedProps {}

export function Testingaffected(props: TestingaffectedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Testingaffected!</h1>
    </div>
  );
}

export default Testingaffected;
