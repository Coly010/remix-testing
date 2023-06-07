import { ReactNode } from 'react';
import { Card } from './card';

export function ActionPanelTitle({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <h3 className="text-base font-semibold leading-6 text-slate-900">
      {children}
    </h3>
  );
}

export function ActionPanelBody({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="mt-2 space-y-2 text-sm text-slate-500">{children}</div>
  );
}

export function ActionPanelActions({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className="mt-5 flex justify-end">{children}</div>;
}

/**
 * @example
 * <ActionPanel>
 *   <ActionPanelTitle>My title</ActionPanelTitle>
 *   <ActionPanelBody>
 *     <p>My text</p>
 *   </ActionPanelBody>
 *   <ActionPanelActions>
 *     <Button ... />
 *   </ActionPanelActions>
 * </ActionPanel>
 */
export function ActionPanel({
  children,
  ...props
}: {
  children: ReactNode;
} & JSX.IntrinsicElements['div']): JSX.Element {
  return (
    <div {...props}>
      <Card>{children}</Card>
    </div>
  );
}
