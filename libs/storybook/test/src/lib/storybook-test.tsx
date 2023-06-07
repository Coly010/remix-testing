import styles from './storybook-test.module.css';

/* eslint-disable-next-line */
export interface StorybookTestProps {}

export function StorybookTest(props: StorybookTestProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StorybookTest!</h1>
    </div>
  );
}

export default StorybookTest;
