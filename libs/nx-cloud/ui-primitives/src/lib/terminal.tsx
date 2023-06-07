import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function Terminal({ command }: { command: string }): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    let t: NodeJS.Timeout;
    if (isCopied) {
      t = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
    return () => {
      t && clearTimeout(t);
    };
  }, [isCopied]);
  return (
    <div className="w-full max-w-full" data-cy="terminal">
      <CopyToClipboard
        text={command}
        onCopy={() => {
          setIsCopied(true);
        }}
      >
        <div className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-normal text-slate-800 subpixel-antialiased dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <div className="flex items-center">
            <p>
              <span className="text-base">→</span>{' '}
              <span className="mx-1 text-slate-500">~/agent $</span>
            </p>
            <p className="mt-0.5 flex-1 pl-2">{command}</p>
          </div>
          <div className="absolute inset-0 h-full w-full bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-50" />
          <div className="absolute inset-0 grid h-full w-full translate-y-full transform items-center justify-items-center transition-all duration-200 group-hover:translate-y-0">
            <div className="flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2">
              {isCopied ? (
                <>
                  <ClipboardDocumentCheckIcon className="mr-4 h-4 w-4" />{' '}
                  Copied!
                </>
              ) : (
                <>
                  <ClipboardDocumentIcon className="mr-4 h-4 w-4" />
                  Click to copy
                </>
              )}
            </div>
          </div>
        </div>
      </CopyToClipboard>
    </div>
  );
}
