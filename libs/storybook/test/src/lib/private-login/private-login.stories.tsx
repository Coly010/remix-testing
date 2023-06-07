import type { Meta } from '@storybook/react';
import { PrivateLogin } from './private-login';

const Story: Meta<typeof PrivateLogin> = {
  component: PrivateLogin,
  title: 'PrivateLogin',
};
export default Story;

export const Primary = {
  args: {},
};
