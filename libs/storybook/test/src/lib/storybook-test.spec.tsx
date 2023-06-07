import { render } from '@testing-library/react';

import StorybookTest from './storybook-test';

describe('StorybookTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookTest />);
    expect(baseElement).toBeTruthy();
  });
});
