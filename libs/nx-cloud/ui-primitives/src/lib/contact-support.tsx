import { ForwardedRef, forwardRef, useState } from 'react';
import { ButtonLink, ButtonLinkProps } from './button';
import { cx } from './ctx';

function getMailto(body?: string, subject?: string) {
  let raw = 'mailto:cloud-support@nrwl.io';

  if (body || subject) {
    const query = new URLSearchParams();
    if (body) {
      query.set('body', encodeURIComponent(body));
    }

    if (subject) {
      query.set('subject', encodeURIComponent(subject));
    }

    raw = raw.concat('?', query.toString());
  }

  return decodeURIComponent(raw);
}
export type ContactSupportProps = { body?: string; subject?: string };

export const ContactSupport = forwardRef(function (
  {
    body = '',
    subject = '',
    children,
    className,
    ...props
  }: ContactSupportProps & Omit<JSX.IntrinsicElements['a'], 'href'>,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const [mailto] = useState(getMailto(body, subject));

  return (
    <a
      ref={ref}
      href={mailto}
      target="_blank"
      rel="noopener noreferrer"
      className={cx('underline', className || '')}
      title="Contact support for any questions"
      {...props}
    >
      {children ? children : 'cloud-support@nrwl.io'}
    </a>
  );
});

export const ContactSupportButton = forwardRef(function (
  {
    body = '',
    subject = '',
    title = 'Contact support for any questions',
    ...props
  }: ContactSupportProps & Omit<ButtonLinkProps, 'href' | 'to'>,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const [mailto] = useState(getMailto(body, subject));

  return (
    <ButtonLink
      href={mailto}
      ref={ref}
      title={title}
      rel="noopener noreferrer"
      {...props}
    />
  );
});
