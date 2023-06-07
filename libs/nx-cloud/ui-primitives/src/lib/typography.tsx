import { ForwardedRef, forwardRef } from 'react';
import { cx } from './ctx';

export interface TitleProps {
  className: string;
}

export const SectionTitle = forwardRef(function (
  { children, className, ...props }: JSX.IntrinsicElements['h1'],
  ref: ForwardedRef<HTMLHeadingElement>
): JSX.Element {
  return (
    <h1
      ref={ref}
      className={cx(
        'text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
});

export const Title = forwardRef(function (
  { children, className, ...props }: JSX.IntrinsicElements['h2'],
  ref: ForwardedRef<HTMLHeadingElement>
): JSX.Element {
  return (
    <h2
      ref={ref}
      className={cx('text-lg font-medium leading-6 text-slate-900', className)}
      {...props}
    >
      {children}
    </h2>
  );
});

export const SubTitle = forwardRef(function (
  { children, className, ...props }: JSX.IntrinsicElements['h3'],
  ref: ForwardedRef<HTMLHeadingElement>
): JSX.Element {
  return (
    <h3
      ref={ref}
      className={cx('text-base, font-normal', className)}
      {...props}
    >
      {children}
    </h3>
  );
});
