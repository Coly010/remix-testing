import styles from './nx-cloud-ui-primitives.module.scss';

/* eslint-disable-next-line */
export interface NxCloudUiPrimitivesProps {}

export function NxCloudUiPrimitives(props: NxCloudUiPrimitivesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NxCloudUiPrimitives!</h1>
    </div>
  );
}

export default NxCloudUiPrimitives;
