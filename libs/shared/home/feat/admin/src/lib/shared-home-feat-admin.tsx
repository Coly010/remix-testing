import styles from './shared-home-feat-admin.module.css';

/* eslint-disable-next-line */
export interface SharedHomeFeatAdminProps {}

export function SharedHomeFeatAdmin(props: SharedHomeFeatAdminProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedHomeFeatAdmin!</h1>
    </div>
  );
}

export default SharedHomeFeatAdmin;
