import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cx } from './ctx';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className: string;
  hasError: boolean;
  ariaDescribedby: string;
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ariaDescribedby, className = '', hasError = false, ...props }, ref) => {
    return (
      <div className="relative rounded-md shadow-sm">
        <textarea
          ref={ref}
          aria-invalid={hasError}
          aria-describedby={ariaDescribedby}
          className={cx(
            'flex w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-80 sm:text-sm',
            className,
            {
              'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500':
                hasError,
            }
          )}
          {...props}
        />
        {hasError && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    );
  }
);
TextArea.displayName = 'TextArea';
