import type { Meta } from '@storybook/react';
import { StorybookNewTest } from './storybook-new-test';

const Story: Meta<typeof StorybookNewTest> = {
  component: StorybookNewTest,
  title: 'StorybookNewTest',
};
export default Story;

export const Primary = {
  args: {},
};
