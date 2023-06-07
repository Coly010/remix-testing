/* eslint-disable @typescript-eslint/no-restricted-imports */
import classNames, { Argument } from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * Small wrapper around classNames and twMerge
 * It enables conditional and dynamic class usage,
 * resolves duplications and conflicts for TailwindCSS
 */
export function cx(...inputs: Argument[]): string {
  return twMerge(classNames(inputs));
}
