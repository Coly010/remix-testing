import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function CodeShowcase({
  content,
  ...props
}: { content: string } & JSX.IntrinsicElements['div']): JSX.Element {
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

  const transformedContent = content.split('\n');

  return (
    <div className="w-full max-w-full" {...props}>
      <CopyToClipboard
        text={content}
        onCopy={() => {
          setIsCopied(true);
        }}
      >
        <div className="group relative flex w-full cursor-pointer overflow-x-auto overflow-y-hidden rounded-lg border border-slate-200 bg-slate-50/50 font-mono text-sm dark:border-slate-700 dark:bg-slate-800/60">
          <div className="p-4 text-left font-mono">
            {transformedContent.map((line, index) => (
              <span
                key={'index-' + index + '-' + line.length}
                className="block whitespace-normal"
              >
                {line}
              </span>
            ))}
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
