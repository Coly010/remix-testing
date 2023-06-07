import { Spinner } from './spinner';

export function Loading({
  show = false,
  text = 'Processing...',
}: {
  show: boolean;
  text?: string;
}): JSX.Element | null {
  return show ? (
    <div className="mx-auto my-12 flex w-full max-w-2xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto inline-flex items-center rounded-md border border-slate-100 bg-white px-4 py-2 text-xs font-semibold leading-6 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200">
        <Spinner className="-ml-1 mr-3 h-4 w-4 animate-spin" />
        {text}
      </div>
    </div>
  ) : null;
}
