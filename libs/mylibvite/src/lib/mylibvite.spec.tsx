import { render } from '@testing-library/react';

import Mylibvite from './mylibvite';

describe('Mylibvite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mylibvite />);
    expect(baseElement).toBeTruthy();
  });
});
