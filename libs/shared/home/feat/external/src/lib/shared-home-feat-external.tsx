import styles from './shared-home-feat-external.module.css';

/* eslint-disable-next-line */
export interface SharedHomeFeatExternalProps {}

export function SharedHomeFeatExternal(props: SharedHomeFeatExternalProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedHomeFeatExternal!</h1>
    </div>
  );
}

export default SharedHomeFeatExternal;
