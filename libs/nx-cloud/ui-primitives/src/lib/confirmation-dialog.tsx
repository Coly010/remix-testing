import { Dialog, Transition } from '@headlessui/react';
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment, ReactNode, useRef } from 'react';
import { Button } from './button';

export function ConfirmationDialogTitle({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <Dialog.Title
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900"
    >
      {children}
    </Dialog.Title>
  );
}

export function ConfirmationDialogContent({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className="mt-2 text-sm text-gray-500">{children}</div>;
}

interface ConfirmationDialogProps {
  children: ReactNode[];
  confirmText?: string;
  cancelText?: string;
  isOpen: boolean;
  handleConfirm: () => void;
  handleCancel: () => void;
  handleClose: () => void;
}

export function ConfirmationDialog({
  cancelText = 'Cancel',
  children,
  confirmText = 'Confirm',
  isOpen,
  handleConfirm,
  handleCancel,
  handleClose,
}: ConfirmationDialogProps): JSX.Element {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={handleClose}
        initialFocus={cancelButtonRef}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div
          data-cy="confirmation-dialog"
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {children}
                  </div>
                </div>
                <div className="mt-5 gap-4 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <Button
                    variant="danger"
                    size="default"
                    onClick={handleConfirm}
                    data-cy="confirmation-dialog-confirm-button"
                  >
                    {confirmText}
                  </Button>
                  <Button
                    variant="secondary"
                    size="default"
                    ref={cancelButtonRef}
                    onClick={handleCancel}
                    data-cy="confirmation-dialog-cancel-button"
                  >
                    {cancelText}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
