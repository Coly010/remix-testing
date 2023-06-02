import styles from './mynewvitelib.module.css';

/* eslint-disable-next-line */
export interface MynewvitelibProps {}

export function Mynewvitelib(props: MynewvitelibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mynewvitelib!</h1>
    </div>
  );
}

export default Mynewvitelib;
