import { render } from '@testing-library/react';

import StorybookNewTest from './storybook-new-test';

describe('StorybookNewTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookNewTest />);
    expect(baseElement).toBeTruthy();
  });
});
