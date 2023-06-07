import { XMarkIcon } from '@heroicons/react/20/solid';
import { ReactNode } from 'react';

/**
 * @example
 * <AnnouncementBanner showDismissedButton onDismissed={() => myCallback()>}>
 *   <Link to="/this/is/my-link" className="group">
 *     <strong className="font-semibold">Possible pseudo-title</strong>
 *     <svg
 *       viewBox="0 0 2 2"
 *       className="mx-2 inline h-0.5 w-0.5 fill-current"
 *       aria-hidden="true"
 *     >
 *       <circle cx={1} cy={1} r={1} />
 *     </svg>
 *     This is the text I want to display, only one short sentence&nbsp;
 *     <span
 *       aria-hidden="true"
 *       className="inline-flex transition-all group-hover:translate-x-2"
 *     >
 *       &rarr;
 *     </span>
 *   </Link>
 * </AnnouncementBanner>
 */
export function AnnouncementBanner({
  children,
  onDismissed = () => void 0,
  showDismissButton = false,
}: {
  children: ReactNode;
  onDismissed?: () => void;
  showDismissButton?: boolean;
}): JSX.Element {
  return (
    <div className="bg-slate-50 shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-2.5 sm:pr-3.5 lg:pl-8">
        <p className="text-sm leading-6">{children}</p>
        {showDismissButton && (
          <button
            type="button"
            onClick={() => onDismissed()}
            className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
