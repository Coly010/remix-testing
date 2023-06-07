import styles from './storybook-new-test.module.css';

/* eslint-disable-next-line */
export interface StorybookNewTestProps {}

export function StorybookNewTest(props: StorybookNewTestProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StorybookNewTest!</h1>
    </div>
  );
}

export default StorybookNewTest;
