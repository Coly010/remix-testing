import { ForwardedRef, forwardRef } from 'react';
import { cx } from './ctx';

export const Card = forwardRef(function (
  { children, className, ...props }: JSX.IntrinsicElements['div'],
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element {
  return (
    <div
      ref={ref}
      className={cx(
        'relative w-full rounded-lg bg-white p-6 shadow ring-1 ring-slate-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
