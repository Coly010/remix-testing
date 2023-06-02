import { render } from '@testing-library/react';

import Testingaffected from './testingaffected';

describe('Testingaffected', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testingaffected />);
    expect(baseElement).toBeTruthy();
  });
});
