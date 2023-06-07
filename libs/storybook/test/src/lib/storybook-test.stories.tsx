import type { Meta } from '@storybook/react';
import { StorybookTest } from './storybook-test';

const Story: Meta<typeof StorybookTest> = {
  component: StorybookTest,
  title: 'StorybookTest',
};
export default Story;

export const Primary = {
  args: {},
};
