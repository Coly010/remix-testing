import styles from './shared-home-feat-customer.module.css';

/* eslint-disable-next-line */
export interface SharedHomeFeatCustomerProps {}

export function SharedHomeFeatCustomer(props: SharedHomeFeatCustomerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedHomeFeatCustomer!</h1>
    </div>
  );
}

export default SharedHomeFeatCustomer;
