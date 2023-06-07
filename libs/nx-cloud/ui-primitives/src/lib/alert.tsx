import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import { cx } from './ctx';

type AlertTypes = 'information' | 'error' | 'notice' | 'success' | 'warning';

interface CustomStyleElements {
  background: string;
  body: string;
  button: string;
  icon: JSX.Element;
  title: string;
}

const styleMap: Record<AlertTypes, CustomStyleElements> = {
  error: {
    background: 'bg-red-50',
    icon: <XCircleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />,
    title: 'text-red-700',
    body: 'text-red-700',
    button:
      'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50',
  },
  information: {
    background: 'border border-slate-100',
    icon: (
      <InformationCircleIcon
        className="h-5 w-5 text-slate-600"
        aria-hidden="true"
      />
    ),
    title: 'text-slate-700',
    body: 'text-slate-700',
    button:
      'bg-slate-50 text-slate-500 hover:bg-slate-100 focus:ring-slate-600 focus:ring-offset-slate-50',
  },
  notice: {
    background: 'bg-blue-50',
    icon: (
      <InformationCircleIcon
        className="h-5 w-5 text-blue-600"
        aria-hidden="true"
      />
    ),
    title: 'text-blue-700',
    body: 'text-blue-700',
    button:
      'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50',
  },
  success: {
    background: 'bg-green-50',
    icon: (
      <CheckCircleIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
    ),
    title: 'text-green-700',
    body: 'text-green-700',
    button:
      'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50',
  },
  warning: {
    background: 'bg-yellow-50',
    icon: (
      <ExclamationTriangleIcon
        className="h-5 w-5 text-yellow-600"
        aria-hidden="true"
      />
    ),
    title: 'text-yellow-700',
    body: 'text-yellow-700',
    button:
      'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50',
  },
};

/**
 * @example
 * <Alert type="notice"
 *        title="My alert title"
 *        handleClose={myFunction}>
 *   <p>My notice content</p>
 * </Alert>
 */
export function Alert({
  children,
  handleClose = null,
  title,
  type,
  ...props
}: {
  children?: ReactNode[] | ReactNode | null;
  handleClose?: (() => void) | null;
  title: string;
  type: AlertTypes;
} & JSX.IntrinsicElements['div']): JSX.Element {
  const styles = styleMap[type];

  return (
    <div
      className={cx('my-4 max-w-full rounded-lg p-4', styles.background)}
      {...props}
    >
      <div className="flex">
        <div className="flex-shrink-0">{styles.icon}</div>
        <div className="ml-3 flex-grow">
          <h3 className={cx('text-sm font-medium', styles.title)}>{title}</h3>
          {children && (
            <div className={cx('mt-2 space-y-2 text-sm', styles.body)}>
              {children}
            </div>
          )}
        </div>
        {!!handleClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={handleClose}
                className={cx(
                  'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                  styles.button
                )}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
