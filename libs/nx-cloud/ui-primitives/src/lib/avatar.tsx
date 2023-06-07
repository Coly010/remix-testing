import { cx } from './ctx';

export function Avatar({
  className = '',
  imageUrl = '',
  name,
  ...props
}: {
  className?: string;
  imageUrl?: string;
  name: string;
} & JSX.IntrinsicElements['span']): JSX.Element {
  const letter = name.substring(0, 1);
  return (
    <span
      {...props}
      className={cx(
        'inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-700',
        className
      )}
    >
      {imageUrl ? (
        <img
          className="h-full w-full rounded-full"
          src={imageUrl}
          alt={name + ' avatar'}
        />
      ) : (
        <span className="text-xs font-medium uppercase leading-none text-white">
          {letter}
        </span>
      )}
    </span>
  );
}
