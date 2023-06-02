import styles from './mylibvite.module.css';

/* eslint-disable-next-line */
export interface MylibviteProps {}

export function Mylibvite(props: MylibviteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mylibvite!</h1>
    </div>
  );
}

export default Mylibvite;
